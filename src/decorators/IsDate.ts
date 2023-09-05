import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { ValidationList } from "../validators/validationList";



export function IsDate(target: any, propertyKey: string) {
    new CreateValidationRule(propMeta).execute<ValidationList.DATE>(
      {
        propertyKey: propertyKey,
        validationType: ValidationList.DATE,
        message: [],
        isValid: false,
      },
      target
    );
  }
  