"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidationRule = void 0;
class CreateValidationRule {
    constructor(meta) {
        this.meta = meta;
        this.meta = meta;
    }
    execute(propertyKey, validationType, target) {
        const rule = this.createRule(propertyKey, validationType);
        this.meta.storeMeta(rule, target);
    }
    createRule(propertyKey, validationType) {
        return {
            property: propertyKey,
            validationType: validationType,
            rule: {
                message: [],
                isValid: false
            }
        };
    }
}
exports.CreateValidationRule = CreateValidationRule;
//# sourceMappingURL=CreateValidationRule.js.map