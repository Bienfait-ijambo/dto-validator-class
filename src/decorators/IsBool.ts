import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { ValidationList } from "../validators/validationList";



export function IsBool(target: any, propertyKey: string) {
    new CreateValidationRule(propMeta).execute<ValidationList.BOOL>(
      {
        propertyKey: propertyKey,
        validationType: ValidationList.BOOL,
        message: [],
        isValid: false,
      },
      target
    );
  }