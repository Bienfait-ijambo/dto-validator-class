export interface IValidationRule{
    validation:string
    message?:string
    isValid:boolean
}
export type ValidationRule=Record<string,IValidationRule>