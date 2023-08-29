"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMetaDataToProperty = exports.addValidationRule = exports.isNegativeNumber = void 0;
require("reflect-metadata");
function isNegativeNumber(parm) {
    const val = parseInt(parm.toString());
    return val < 0 ? true : false;
}
exports.isNegativeNumber = isNegativeNumber;
/**
 *
 * @param ruleName
 * @param ruleProp
 * @param target
 * checks if a rule is valid
 */
function addValidationRule(rule, target) {
    //validate rule if is valid
    const isValid = true;
    if (isValid) {
        addMetaDataToProperty(rule, target);
    }
    else {
        throw new Error("Invalid rule !!");
    }
}
exports.addValidationRule = addValidationRule;
function addMetaDataToProperty(rule, target) {
    const validationRules = Reflect.getMetadata("validationRules", target) || [];
    validationRules.push(rule);
    Reflect.defineMetadata("validationRules", validationRules, target);
}
exports.addMetaDataToProperty = addMetaDataToProperty;
//# sourceMappingURL=util.js.map