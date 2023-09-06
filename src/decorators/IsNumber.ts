import { CreateValidationRule } from "../metadata/CreateValidationRule"
import { propMeta } from "../metadata/CreateValidationMetaData"
import { ValidationList } from "../validators/validationList"
import { IMessage } from "../types/decorator.interfaces"


type IsNumberDecoratorType={} & IMessage

export function IsNumber(param?:IsNumberDecoratorType){
 
  return function (target:any,propertyKey:string){
    new CreateValidationRule(propMeta).execute<ValidationList.NUMBER>(
      {
        propertyKey: propertyKey,
        validationType: ValidationList.NUMBER,
        message:!param?.message ? []:[param.message],

        isValid: false,
      },
      target
    );
  }
    
   

}