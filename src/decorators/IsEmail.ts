import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/CreateValidationMetaData";
import { ValidationList } from "../validators/validationList";

export function IsEmail(target: any, propertyKey: string) {
  new CreateValidationRule(propMeta).execute<ValidationList.EMAIL>(
    {
      propertyKey: propertyKey,
      validationType: ValidationList.EMAIL,
      message: [],
      isValid: false,
    },
    target
  );
}
