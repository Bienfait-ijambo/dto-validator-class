import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { ValidationList } from "../validators/validationList";
import { IMessage } from "../types/decorator.interfaces";


type IsDateDecoratorType={} & IMessage

export function IsDate(param?:IsDateDecoratorType) {

  return function (target: any, propertyKey: string){
    new CreateValidationRule(propMeta).execute<ValidationList.DATE>(
      {
        propertyKey: propertyKey,
        validationType: ValidationList.DATE,
        message:!param?.message ? []:[param.message],
        isValid: false,
      },
      target
    );
  }
   
  }
  