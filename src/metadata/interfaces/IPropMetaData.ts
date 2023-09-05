import { TypeValidationRule } from "../../types/decorator.type";
import { ValidationList } from "../../validators/validationList";

export interface IPropMetaData {
  createMetaData<T extends ValidationList>(rule:TypeValidationRule<T>, target: any): void;
  getMetaData(object: any): any;
}
