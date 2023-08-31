import 'reflect-metadata';
// Custom decorator to define email validation
function IsEmail(target: any, propertyKey: string) {
  const validationRules = Reflect.getMetadata('validationRules', target) || [];
  validationRules.push({
    propertyKey,
    validator: 'IsEmail',
    message: 'Invalid email format',
  });
  Reflect.defineMetadata('validationRules', validationRules, target);
}

// Custom decorator to define length validation
function Length(min: number, max: number) {
  return function(target: any, propertyKey: string) {
    const validationRules = Reflect.getMetadata('validationRules', target) || [];
    validationRules.push({
      propertyKey,
      validator: 'Length',
      message: `Email length must be between ${min} and ${max} characters`,
      options: { min, max },
    });
    Reflect.defineMetadata('validationRules', validationRules, target);
  };
}

function Logs(data:string){
    return function(target: Object,property:string,descriptor:PropertyDecorator){
        Reflect.defineMetadata('Logger',data,target,property)
    }
}

function validate(target: any): string[] {
    
  const validationRules = Reflect.getMetadata('validationRules', target) || [];
// console.log(validationRules)
  const errors: string[] = [];

  for (const rule of validationRules) {
    const { propertyKey, validator, message, options } = rule;
    const value = target[propertyKey];

    if (validator === 'IsEmail') {
      if (!isValidEmail(value)) {
        errors.push(message);
      }
    }

    if (validator === 'Length') {
      const { min, max } = options;
      if (value.length < min || value.length > max) {
        errors.push(message);
      }
    }
  }

  return errors;
}

function isValidEmail(email: string): boolean {
  // You can implement your own email validation logic here
  // For simplicity, we're assuming any string with '@' is a valid email
  return email.includes('@');
}


class Post {
  @Length(8, 18)
  @IsEmail
  email: string;

  constructor(email: string) {
    this.email = email;
  }


}

const post = new Post('bien-----------------------------------------------------------------@gmail.com');
const validationErrors = validate(post);

console.log(validationErrors);
