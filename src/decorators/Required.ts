import { CreateValidationRule } from "../metadata/CreateValidationRule"
import { PropMetaData } from "../metadata/PropMetaData"
import { ValidationList } from "../validators/validations"

export function Required(target:any,propertyKey:string){
    const propMeta=new PropMetaData()

    new CreateValidationRule(propMeta)
    .execute(propertyKey,ValidationList.REQUIRED,target)
}