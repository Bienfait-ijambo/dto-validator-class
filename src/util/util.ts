import "reflect-metadata";
import { IValidationRule } from "../types/dto-validator-class.type";

export function isNegativeNumber(parm: number | string): boolean {
  const val = parseInt(parm.toString());

  return val < 0 ? true : false;
}

/**
 *
 * @param ruleName
 * @param ruleProp
 * @param target
 * checks if a rule is valid
 */
export function addValidationRule( rule: Record<string, any>, target: any ) {
  //validate rule if is valid
  const isValid = true;

  if (isValid) {
    addMetaDataToProperty(rule,target)
  } else {
    throw new Error("Invalid rule !!");
  }
}


export function addMetaDataToProperty( rule: Record<string, any>, target: any){
    const validationRules =
    Reflect.getMetadata("validationRules", target) || [];
  validationRules.push(rule);
  Reflect.defineMetadata("validationRules", validationRules, target);
}
