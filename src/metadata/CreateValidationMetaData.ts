import "reflect-metadata";
import { IPropMetaData } from "./interfaces/IPropMetaData";
import { ValidationList } from "../validators/validationList";
import { TypeValidationRule } from "../types/decorator.type";

export class CreateValidationMetaData implements IPropMetaData {
  
  protected VALIDATION_METADATA: string = "validationRules";

  createMetaData<T extends ValidationList>(rule:TypeValidationRule<T>, target: any) {
    const validationRules =
      Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
    validationRules.push(rule);
    Reflect.defineMetadata(this.VALIDATION_METADATA, validationRules, target);
  }

  getMetaData(target: any): any {
    const validationRules =
      Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
    return validationRules;
  }
}

export const propMeta = new CreateValidationMetaData();
