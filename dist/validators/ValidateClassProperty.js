"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateClassProperty = void 0;
const PropMetaData_1 = require("../metadata/PropMetaData");
const Validator_1 = require("./Validator");
const validationList_1 = require("./validationList");
class ValidateClassProperty extends Validator_1.Validator {
    constructor(target) {
        super();
        this.target = target;
        this.validateRules();
    }
    getMetaData() {
        const propMetaData = new PropMetaData_1.PropMetaData();
        const metadata = propMetaData.getMetaData(this.target);
        return metadata;
    }
    validateRules() {
        const rules = this.getMetaData();
        for (let index = 0; index < rules.length; index++) {
            const propValue = this.target[rules[index].propertyKey];
            //email
            if (rules[index].validationType === validationList_1.ValidationList.EMAIL) {
                if (!this.isValidEmail(propValue)) {
                    rules[index].message.push('Email is not valid !');
                }
            }
            //required
            if (rules[index].validationType === validationList_1.ValidationList.REQUIRED) {
                if (!this.isNotEmpty(propValue)) {
                    rules[index].message.push('This property is required !');
                }
            }
            //boolen
            if (rules[index].validationType === validationList_1.ValidationList.BOOL) {
                if (!this.isBoolean(propValue)) {
                    rules[index].message.push('This property must be a boolean');
                }
            }
            //is number
            if (rules[index].validationType === validationList_1.ValidationList.NUMBER) {
                if (!this.isBoolean(propValue)) {
                    rules[index].message.push('This property must be a number');
                }
            }
            //operations
            const operation = rules[index].operation;
            if (typeof operation !== 'undefined') {
                const minLength = rules[index].operation[0].Length.min;
                const maxLength = rules[index].operation[0].Length.max;
                if (!!operation.length) {
                    if (!this.hasValidLength(propValue, minLength, maxLength)) {
                        rules[index].message.push(`This property must be between ${minLength} and ${maxLength} characters`);
                    }
                }
            }
        }
        console.log('rules', rules);
    }
}
exports.ValidateClassProperty = ValidateClassProperty;
//# sourceMappingURL=ValidateClassProperty.js.map