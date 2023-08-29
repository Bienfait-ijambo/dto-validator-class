export interface IValidationRule{
    validation:string
    message?:string
    isValid:boolean
    prop?:string
}
export type ValidationRule=Record<string,IValidationRule>