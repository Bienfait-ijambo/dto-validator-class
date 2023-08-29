import { addValidationRule } from "../util/util";
import { rulesArray } from "../validators/rules";

export function IsEmail(target:any,propertyKey:string){
    addValidationRule({email:rulesArray.email,prop:propertyKey},target)

}