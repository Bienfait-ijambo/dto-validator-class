import { TypeValidationRule } from "../../types/decorator.type";
import { ValidationList } from "../../validators/validationList";

export interface IPropMetaData {
  /**
   * 
   * @param rule 
   * @param target 
   * Create meta data
   */
  createMetaData<T extends ValidationList>(rule:TypeValidationRule<T>, target: any): void;

  /**
   * 
   * @param object 
   * get meta data added to a class
   */
  getMetaData(object: any): any;
}
