// import 'reflect-metadata';

import { IsEmail } from "./decorators/IsEmail";
import { Required } from "./decorators/Required";

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

  @Required
  @IsEmail
  email: string;


  constructor(email: string) {
    this.email = email;
  }



}

// Instantiate the class
const myClass = new MyClass('e');

// const validationRules = Reflect.getMetadata('validationRules', myClass)
// console.log(validationRules)


    
  const validationRules = Reflect.getMetadata('validationRules', myClass) || [];
console.log(validationRules)
  
