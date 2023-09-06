import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { ValidationList } from "../validators/validationList";
import { IMessage } from "../types/decorator.interfaces";

type IsBoolDecoratorType={} & IMessage


export function IsBool(param?:IsBoolDecoratorType) {
  return function (target: any, propertyKey: string){
    new CreateValidationRule(propMeta).execute<ValidationList.BOOL>(
      {
        propertyKey: propertyKey,
        validationType: ValidationList.BOOL,
        message:!param?.message ? []:[param.message],
        isValid: false,
      },
      target
    );
  }
  
  }