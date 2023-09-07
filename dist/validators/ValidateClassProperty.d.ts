import { TypeValidationRule } from "../types/decorator.type";
import { Validator } from "./Validator";
import { ValidationList } from "./validationList";
/**
 * This class allows to validate a class that holds  metadata
 */
export declare class ValidateClassProperty extends Validator {
    private target;
    constructor(target: any);
    validate(): TypeValidationRule<ValidationList>[];
    private getMetaData;
    private validateRules;
    /**
     * this functions checks weither all input are valid
     */
    verify(rules: TypeValidationRule<ValidationList>[]): {};
}
