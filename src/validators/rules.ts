// type ValidationRule=

import { ValidationRule } from "../types/dto-validator-class.type";


export const rules:ValidationRule={
    email:{
        validation:'email',
        message:'is not a valid email',
        isValid:false
    },
    required:{
        validation:'required',
        message:'is Required',
        isValid:false
    }
}