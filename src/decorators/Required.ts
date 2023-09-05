import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { TypeLength } from "../types/decorator.type";
import { ValidationList } from "../validators/validationList";

type RequiredDecorator = {
  message: string;
  Length?: TypeLength;
  Regex?: string;
};

export function Required(param?: RequiredDecorator) {

    const validationRule=new CreateValidationRule(propMeta)

  return function (target: any, propertyKey: string) {
    if (typeof param?.Length !== "undefined") {
        validationRule.execute<ValidationList.REQUIRED>({
          propertyKey: propertyKey,
          validationType: ValidationList.REQUIRED,
          operation: [{ Length: param.Length }],
          message:[],
          isValid:false
        },
        target
      );

    } else {
        validationRule.execute<ValidationList.REQUIRED>(
        {
          propertyKey: propertyKey,
          validationType: ValidationList.REQUIRED,
          message:[],
          isValid:false
        },
        target
      );
    }
  };
}
