"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propMeta = exports.CreateValidationMetaData = void 0;
require("reflect-metadata");
/**
 * Create validation metadata
 */
class CreateValidationMetaData {
    constructor() {
        this.VALIDATION_METADATA = "VALIDATION_METADATA";
    }
    /**
     *
     * @param rule
     * @param target
     * create metadata
     */
    createMetaData(rule, target) {
        const validationRules = Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
        validationRules.push(rule);
        Reflect.defineMetadata(this.VALIDATION_METADATA, validationRules, target);
    }
    /**
     *
     * @param target
     * @returns metadata added to a given class
     */
    getMetaData(target) {
        const validationRules = Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
        return validationRules;
    }
}
exports.CreateValidationMetaData = CreateValidationMetaData;
exports.propMeta = new CreateValidationMetaData();
//# sourceMappingURL=CreateValidationMetaData.js.map