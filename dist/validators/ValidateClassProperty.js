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
        this.processEmailRule();
    }
    getMetaData() {
        const propMetaData = new PropMetaData_1.PropMetaData();
        const metadata = propMetaData.getMetaData(this.target);
        return metadata;
    }
    processEmailRule() {
        const rules = this.getMetaData();
        for (let index = 0; index < rules.length; index++) {
            const propValue = this.target[rules[index].propertyKey];
            if (rules[index].validationType === validationList_1.ValidationList.EMAIL) {
                if (!this.isValidEmail(propValue)) {
                    rules[index].message.push('Email is not valid !');
                }
            }
            // const operation:TypeValidationOperation[]=rules[index].operation
            // if(typeof operation!=='undefined'){
            //     const minLength=rules[index].operation[0].Length.min
            //     const maxLength=rules[index].operation[0].Length.max
            //     if(!!operation.length){
            //         if(!this.hasMinLength(propValue,minLength)){
            //              rules[index].message.push(`Minimum length is ${minLength}`)
            //         }
            //         if(!this.hasMaxLength(propValue,maxLength)){
            //             rules[index].message.push(`Minimum length is ${maxLength}`)
            //        }
            //     }
            // } 
        }
    }
    processRequiredRule() {
        const rules = this.getMetaData();
        for (let index = 0; index < rules.length; index++) {
            const propValue = this.target[rules[index].propertyKey];
            if (rules[index].validationType === validationList_1.ValidationList.EMAIL) {
                if (!this.isNotEmpty(propValue)) {
                    rules[index].message.push('This property is required');
                }
            }
            const operation = rules[index].operation;
            if (typeof operation !== 'undefined') {
                const minLength = rules[index].operation[0].Length.min;
                const maxLength = rules[index].operation[0].Length.max;
                if (!!operation.length) {
                    if (!this.hasMinLength(propValue, minLength)) {
                        rules[index].message.push(`Minimum length is ${minLength}`);
                    }
                    if (!this.hasMaxLength(propValue, maxLength)) {
                        rules[index].message.push(`Minimum length is ${maxLength}`);
                    }
                }
            }
        }
    }
}
exports.ValidateClassProperty = ValidateClassProperty;
//# sourceMappingURL=ValidateClassProperty.js.map