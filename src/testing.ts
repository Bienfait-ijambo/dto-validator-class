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
  email: string;

  validate() {
    return new ValidateClassProperty(this);
  }
}

// Instantiate the class
const myClass = new MyClass();
myClass.email = "";

// const [errors,input]=myClass.validate()
// input.getValidatedInputs()

console.log(myClass.validate());
