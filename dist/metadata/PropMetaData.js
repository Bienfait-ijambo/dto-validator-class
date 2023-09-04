"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propMeta = exports.PropMetaData = void 0;
require("reflect-metadata");
class PropMetaData {
    constructor() {
        this.VALIDATION_METADATA = "validationRules";
    }
    createMetaData(rule, target) {
        const validationRules = Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
        validationRules.push(rule);
        Reflect.defineMetadata(this.VALIDATION_METADATA, validationRules, target);
    }
    getMetaData(target) {
        const validationRules = Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
        return validationRules;
    }
}
exports.PropMetaData = PropMetaData;
exports.propMeta = new PropMetaData();
//# sourceMappingURL=PropMetaData.js.map