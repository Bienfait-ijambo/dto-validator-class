## DTO-VALIDATOR-CLASS

Is library built on `reflect-metadata` library that allows to validate class properties.

### supported properties decorators

#### 1. @Required

    * How to use ``@Required`` decorator

```javascript
class A {
  /**
   *  @param message ${string} custom message to be displayed
   * @param Length min an max length of the message
   */
  @Required({
    message: "User Name is required",
    Length: {
      min: 2,
      max: 20,
    },
  })
  userName: string;

  /**
   * In this case the will throw the default message
   */
  @Required()
  bio: string;

  /**
   * customer message
   */
  @Required({
    message: "Telephone is required",
  })
  telephone: string;
}
```

     * @IsNumber decorator : checks if a property is a number

```javascript
class B {
  /**
   *  @throws a default message if age not provided
   */
  @IsNumber()
  age: number;

  /*  
        --or--
        @IsNumber({
          message: "..."
        })
       age:number
       */
}
```

    *  @IsBool decorator : checks if a property is a boolean

    *  @IsDate decorator : checks if a property is a date

Note : The usage of @IsDate, @IsBool,@IsNumber are the same means that the can take an `object ` with message as argument to define a custom message. But the `@Required ` decorator can take an ` object as argument` with ``message,Length object to define the min and max character of a string.

## Real world example

````javascript

       import { Required,IsEmail,IsNumber } from "./decorators";
       import { ValidateClassProperty } from "./validators/ValidateClassProperty";

       class MyClass {

           @Required({
               message: "Entre 2 et 20",
               Length: {
               min: 2,
               max: 20,
               },
           })
           @IsEmail({
               message:"Adresse mail invalide"
           })
           email: string;

           @IsNumber({
               message:"Entre un nombre"
           })
           age: number;

           @Required({
               Length: {
               min: 6,
               max: 8,
               },
           })
           password: string;


           constructor(email:string,password:string,age:number) {
               this.email=email
               this.password=password
               this.age=age
           }

           validate() {
               const validator= new ValidateClassProperty(this);
               const input=validator.verify(validator.validate())
               return Promise.resolve(input).catch(error=>error)

           }
           }

           // Instantiate the class
           const myClass = new MyClass("bienfait","password",12);
           // myClass.email = "bi@gmail.com";
           // myClass.age=23
           // myClass.password="password"
           async function insert(){
               try {
                   const input=await myClass.validate();
                   console.log('input',input)
               } catch (error) {
                   console.log('error : ',error.message)
               }
           }

           insert()

     ```


````
