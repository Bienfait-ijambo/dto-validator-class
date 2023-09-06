import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { TypeLength } from "../types/decorator.type";
import { ValidationList } from "../validators/validationList";
import { IMessage } from "../types/decorator.interfaces";

type RequiredDecoratorType = {
  Length?: TypeLength;
  Regex?: string;
} & IMessage

export function Required(param?: RequiredDecoratorType) {

    const validationRule=new CreateValidationRule(propMeta)

  return function (target: any, propertyKey: string) {
    if (typeof param?.Length !== "undefined") {

        validationRule.execute<ValidationList.REQUIRED>({
          propertyKey: propertyKey,
          validationType: ValidationList.REQUIRED,
          operation: [{ Length: param.Length }],
          message:!param?.message ? []:[param.message],
          isValid:false
        },
        target
      );

    } else {
        validationRule.execute<ValidationList.REQUIRED>(
        {
          propertyKey: propertyKey,
          validationType: ValidationList.REQUIRED,
          message:!param?.message ? []:[param.message],
          isValid:false
        },
        target
      );
    }
  };
}
