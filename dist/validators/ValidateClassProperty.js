"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateClassProperty = void 0;
const CreateValidationMetaData_1 = require("../metadata/CreateValidationMetaData");
const Validator_1 = require("./Validator");
const validationList_1 = require("./validationList");
/**
 * This class allows to validate a class that holds  metadata
 */
class ValidateClassProperty extends Validator_1.Validator {
    constructor(target) {
        super();
        this.target = target;
    }
    validate() {
        const rules = this.getMetaData();
        return this.validateRules(rules);
    }
    getMetaData() {
        const propMetaData = new CreateValidationMetaData_1.CreateValidationMetaData();
        const metadata = propMetaData.getMetaData(this.target);
        return metadata;
    }
    validateRules(rules) {
        for (let index = 0; index < rules.length; index++) {
            const propValue = this.target[rules[index].propertyKey];
            //email
            if (rules[index].validationType === validationList_1.ValidationList.EMAIL) {
                if (!this.isValidEmail(propValue)) {
                    if (rules[index].message.length === 0) {
                        rules[index].message.push("Email is not valid !");
                    }
                    rules[index].isValid = false;
                }
                else {
                    rules[index].isValid = true;
                    rules[index].message = [];
                }
            }
            //required
            if (rules[index].validationType === validationList_1.ValidationList.REQUIRED) {
                if (!this.isNotEmpty(propValue)) {
                    if (rules[index].message.length === 0) {
                        rules[index].message.push("This property is required !");
                    }
                    rules[index].isValid = false;
                }
                else {
                    rules[index].isValid = true;
                    rules[index].message = [];
                }
            }
            //boolen
            if (rules[index].validationType === validationList_1.ValidationList.BOOL) {
                if (!this.isBoolean(propValue)) {
                    if (rules[index].message.length === 0) {
                        rules[index].message.push("This property must be a boolean");
                    }
                    rules[index].isValid = false;
                }
                else {
                    rules[index].isValid = true;
                    rules[index].message = [];
                }
            }
            //is number
            if (rules[index].validationType === validationList_1.ValidationList.NUMBER) {
                if (!this.isNumber(propValue)) {
                    if (rules[index].message.length === 0) {
                        rules[index].message.push("This property must be a number");
                    }
                    rules[index].isValid = false;
                }
                else {
                    rules[index].isValid = true;
                    rules[index].message = [];
                }
            }
            //date
            if (rules[index].validationType === validationList_1.ValidationList.DATE) {
                if (!this.isValidDate(propValue)) {
                    if (rules[index].message.length === 0) {
                        rules[index].message.push("Date must be a valid date");
                    }
                    rules[index].isValid = false;
                }
                else {
                    rules[index].isValid = true;
                    rules[index].message = [];
                }
            }
            //operations
            const operation = rules[index].operation;
            if (typeof operation !== "undefined") {
                const minLength = rules[index].operation[0].Length.min;
                const maxLength = rules[index].operation[0].Length.max;
                if (!!operation.length) {
                    if (!this.hasValidLength(propValue, minLength, maxLength)) {
                        if (rules[index].message.length === 0) {
                            rules[index].message.push(`This property must be between ${minLength} and ${maxLength} characters`);
                        }
                        rules[index].isValid = false;
                    }
                    else {
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
    verify(rules) {
        let errors = 0;
        const inputs = {};
        for (const prop of rules) {
            if (!prop.isValid) {
                errors++;
                throw new Error(prop.message[0]);
            }
            else {
                inputs[prop.propertyKey] = this.target[prop.propertyKey];
            }
        }
        if (errors === 0)
            return inputs;
    }
}
exports.ValidateClassProperty = ValidateClassProperty;
//# sourceMappingURL=ValidateClassProperty.js.map