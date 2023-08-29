import 'reflect-metadata';

function IsInt(target: any, propertyKey: string) {
  // return function() {
    const validationRules=Reflect.getMetadata('validationRules',target)||[]
    validationRules.push({
      valiation:'Int',
      message:'Must be an integer',
      isValid: false
    })
    Reflect.defineMetadata('validationRules', validationRules, target);
  // };
}

function IsEmail(target: any, propertyKey: string) {
 
  // return function(target: any, propertyKey: string) {
    const validationRules=Reflect.getMetadata('validationRules',target)||[]
    validationRules.push({
      valiation:'email',
      message:'Email is required',
      isValid: false
    })
    Reflect.defineMetadata('validationRules', validationRules, target);
  // };
}
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
    Reflect.defineMetadata('func:metadata', '-->func:O1', target);

  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
    Reflect.defineMetadata('func:metadata', '-->func:O2', target);

  };
}
class MyClass {

  @IsInt
  @IsEmail
  email: string;


  constructor(email: string) {
    this.email = email;
  }

  @first()
  @second()
   checker(){

  }

}

// Instantiate the class
const myClass = new MyClass('e');

// const validationRules = Reflect.getMetadata('validationRules', myClass)
// console.log(validationRules)

// console.log('instance: ' + JSON.stringify(instance))
function validate(target: any) {
    
  const validationRules = Reflect.getMetadata('validationRules', target) || [];
console.log(validationRules)
  
}
const v=validate(myClass)