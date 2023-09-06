import { TypeValidationRule } from "../../types/decorator.type"
import { ValidationList } from "../validationList"

export type TypeRuleInput<T extends ValidationList>={
    rules:TypeValidationRule<T>[]
    index:number,
    validation:T,
    propValue:any
}

export class ValidateInput{

    
}

export function emailRule<T extends ValidationList>(input:TypeRuleInput<T>){
    const validationRule=input.rules[input.index].validationType
    if(validationRule===input.validation){

        if(!this.isValidEmail(input.propValue)){
            input.rules[input.index].message.push('Email is not valid !')
        }else{
            input.rules[input.index].isValid=true
        }
    }
}