"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidationRule = void 0;
class CreateValidationRule {
    constructor(meta) {
        this.meta = meta;
        this.meta = meta;
    }
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