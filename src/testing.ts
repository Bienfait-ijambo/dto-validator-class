import { IsEmail } from "./decorators/IsEmail";
import { Required } from "./decorators/Required";
import { ValidateClassProperty } from "./validators/ValidateClassProperty";

class MyClass {
  @Required({
    message: "L'adresse mail est requis",
    Length: {
      min: 2,
      max: 10,
    },
  })
  @IsEmail
  email: string

  validate() {
   
    const errors = new ValidateClassProperty(this);
    return errors;
  
  }
}

// Instantiate the class
const myClass = new MyClass();
myClass.email="bienfaitmail.com";

console.log(myClass.validate())

