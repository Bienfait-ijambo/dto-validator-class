import { CreateValidationRule } from "../metadata/CreateValidationRule";
import { propMeta } from "../metadata/PropMetaData";
import { ValidationList } from "../validators/validationList";

export function IsEmail(target: any, propertyKey: string) {
  new CreateValidationRule(propMeta).execute(
  {  propertyKey:propertyKey,
    validationType:ValidationList.EMAIL,
    message:[],
          isValid:false
  },
    
    target
  );
}
