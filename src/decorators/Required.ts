
import { addValidationRule } from '../util/util';
import { rulesArray } from '../validators/rules';


export function Required(target:any,propertyKey:string){
    addValidationRule({required:rulesArray.required,prop:propertyKey},target)
}