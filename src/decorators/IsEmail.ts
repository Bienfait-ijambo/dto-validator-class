import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/PropMetaData";
import { ValidationList } from "../validators/validations";

export function IsEmail(target: any, propertyKey: string) {
  new CreateValidationRule(propMeta).execute(
    propertyKey,
    ValidationList.EMAIL,
    target
  );
}
