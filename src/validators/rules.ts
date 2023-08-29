// type ValidationRule=

import { ValidationRule } from "../types/dto-validator-class.type";


export const rulesArray:ValidationRule={
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