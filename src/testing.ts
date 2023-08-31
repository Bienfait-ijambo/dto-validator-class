// import 'reflect-metadata';

import { IsEmail } from "./decorators/IsEmail";
import { IsNumber } from "./decorators/IsNumber";
import { Required } from "./decorators/Required";
import { VALIDATION_METADATA } from "./metadata/PropMetaData";

// function IsInt(target: any, propertyKey: string) {
//   // return function() {
//     const validationRules=Reflect.getMetadata('validationRules',target)||[]
//     validationRules.push({
//       valiation:'Int',
//       message:'Must be an integer',
//       isValid: false
//     })
//     Reflect.defineMetadata('validationRules', validationRules, target);
//   // };
// }

// function IsEmail(target: any, propertyKey: string) {
 
//   // return function(target: any, propertyKey: string) {
//     const validationRules=Reflect.getMetadata('validationRules',target)||[]
//     validationRules.push({
//       valiation:'email',
//       message:'Email is required',
//       isValid: false
//     })
//     Reflect.defineMetadata('validationRules', validationRules, target);
//   // };
// }
// function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called");
//     Reflect.defineMetadata('func:metadata', '-->func:O1', target);

//   };
// }
 
// function second() {
//   console.log("second(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("second(): called");
//     Reflect.defineMetadata('func:metadata', '-->func:O2', target);

//   };
// }
class MyClass {

  @IsNumber
  @Required
  @IsEmail
  email: string;

  


  constructor(email: string) {
    this.email = email;
  }

  validate(){
    const validationRules = Reflect.getMetadata(VALIDATION_METADATA, this) || [];
    return validationRules
  }

}

// Instantiate the class
const myClass = new MyClass('e');


console.log(myClass.validate())
