import { CreateValidationMetaData } from "../metadata/CreateValidationMetaData";
import {
  TypeValidationOperation,
  TypeValidationRule,
} from "../types/decorator.type";
import { Validator } from "./Validator";
import { ValidationList } from "./validationList";

/**
 * This class allows to validate a class that holds  metadata
 */
export class ValidateClassProperty extends Validator {
  private target: any;

  constructor(target: any) {
    super();
    this.target = target;
  }

  public validate() {
    const rules = this.getMetaData();

    return this.validateRules(rules);
  }

  private getMetaData<T extends ValidationList>(): TypeValidationRule<T>[] {
    const propMetaData = new CreateValidationMetaData();
    const metadata = propMetaData.getMetaData(this.target);
    return metadata;
  }

  private validateRules<T extends ValidationList>(
    rules: TypeValidationRule<T>[]
  ) {
    for (let index = 0; index < rules.length; index++) {
      const propValue = this.target[rules[index].propertyKey];
      const property=rules[index].propertyKey

      //email
      if (rules[index].validationType === ValidationList.EMAIL) {
        if (!this.isValidEmail(propValue)) {
          if (rules[index].message.length === 0) {
            rules[index].message.push(`The ${propValue} field must be valid email`);
          }
          rules[index].isValid = false;
        } else {
          rules[index].isValid = true;
          rules[index].message = [];
        }
      }

      //required
      if (rules[index].validationType === ValidationList.REQUIRED) {
       
        if (!this.isNotEmpty(propValue)) {
          if (rules[index].message.length === 0) {
            rules[index].message.push(`The ${property} field is required !`);
          }
          rules[index].isValid = false;
        } else {
          rules[index].isValid = true;
          rules[index].message = [];
        }
      }

      //boolen
      if (rules[index].validationType === ValidationList.BOOL) {
        if (!this.isBoolean(propValue)) {
          if (rules[index].message.length === 0) {
            rules[index].message.push(`The ${property} must be a boolean`);
          }
          rules[index].isValid = false;
        } else {
          rules[index].isValid = true;
          rules[index].message = [];
        }
      }

      //is number

      if (rules[index].validationType === ValidationList.NUMBER) {
        if (!this.isNumber(propValue)) {
          if (rules[index].message.length === 0) {
            rules[index].message.push(`The ${property} must be a number`);
          }
          rules[index].isValid = false;
        } else {
          rules[index].isValid = true;
          rules[index].message = [];
        }
      }

      //date

      if (rules[index].validationType === ValidationList.DATE) {
        if (!this.isValidDate(propValue)) {
          if (rules[index].message.length === 0) {
            rules[index].message.push(`The ${property} field must be a valid date`);
          }
          rules[index].isValid = false;
        } else {
          rules[index].isValid = true;
          rules[index].message = [];
        }
      }

      //operations
      const operation: TypeValidationOperation[] = rules[index].operation;

      if (typeof operation !== "undefined") {
        const minLength = rules[index].operation[0].Length.min;
        const maxLength = rules[index].operation[0].Length.max;

        if (!!operation.length) {
          if (!this.hasValidLength(propValue, minLength, maxLength)) {
            if (rules[index].message.length === 0) {
              rules[index].message.push(
                `The ${property} field must be between ${minLength} and ${maxLength} characters`
              );
            }
            rules[index].isValid = false;
          } else {
            rules[index].isValid = true;
            rules[index].message = [];
          }
        }
      }
    }

    return rules;
  }

  /**
   * this functions checks weither all input are valid
   */
  verify(rules: TypeValidationRule<ValidationList>[]) {
 
    let errors = 0;
    const inputs = {};
    for (const prop of rules) {
      if (!prop.isValid) {
        errors++;
        throw new Error(prop.message[0]);
      } else {
        inputs[prop.propertyKey] = this.target[prop.propertyKey];
      }
    }
    if (errors === 0) return inputs;
  }
}
