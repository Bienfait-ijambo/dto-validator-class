import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { ValidationList } from "../validators/validationList";
import { IMessage } from "../types/decorator.interfaces";

type EmailDecoratorType={
} & IMessage

export function IsEmail(param?:EmailDecoratorType) {
  return function (target: any, propertyKey: string){
    new CreateValidationRule(propMeta).execute<ValidationList.EMAIL>(
      {
        propertyKey: propertyKey,
        validationType: ValidationList.EMAIL,
        message:!param?.message ? []:[param.message],
        isValid: false,
      },
      target
    );
  }
}
