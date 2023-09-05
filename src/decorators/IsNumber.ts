import { CreateValidationRule } from "../metadata/CreateValidationRule"
import { propMeta } from "../metadata/CreateValidationMetaData"
import { ValidationList } from "../validators/validationList"

export function IsNumber(target:any,propertyKey:string){
 
    
    new CreateValidationRule(propMeta).execute<ValidationList.NUMBER>(
        {
          propertyKey: propertyKey,
          validationType: ValidationList.NUMBER,
          message: [],
          isValid: false,
        },
        target
      );

}