import { ValidationList } from "../validators/validationList";



export type TypeLength = ILength;

export type TypeMessage = IMessage;

export type TypeRegex=string

export type TypeValidationOperation={
    Length?:TypeLength
    regex?:TypeRegex
}


export type TypeValidationRule={
    propertyKey:string,
    validationType:ValidationList,
    operation?:Array<TypeValidationOperation>
    message:string[]
    isValid:boolean
  }