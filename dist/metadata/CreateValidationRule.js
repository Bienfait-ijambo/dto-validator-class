"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidationRule = void 0;
class CreateValidationRule {
    constructor(meta) {
        this.meta = meta;
        this.meta = meta;
    }
    /**
     *
     * @param validationRule  ${object}
     * @param target
     * This function allows to add validation rules to a property of the target class
     */
    execute(validationRule, target) {
        const rule = this.createRule(validationRule);
        this.meta.createMetaData(rule, target);
    }
    createRule(rule) {
        return {
            propertyKey: rule.propertyKey,
            validationType: rule.validationType,
            operation: rule.operation,
            message: rule.message,
            isValid: false
        };
    }
}
exports.CreateValidationRule = CreateValidationRule;
//# sourceMappingURL=CreateValidationRule.js.map