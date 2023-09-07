
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

