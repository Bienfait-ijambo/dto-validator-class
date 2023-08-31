"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propMeta = exports.PropMetaData = exports.VALIDATION_METADATA = void 0;
require("reflect-metadata");
exports.VALIDATION_METADATA = 'validationRules';
class PropMetaData {
    storeMeta(rule, target) {
        const validationRules = Reflect.getMetadata(exports.VALIDATION_METADATA, target) || [];
        validationRules.push(rule);
        Reflect.defineMetadata(exports.VALIDATION_METADATA, validationRules, target);
    }
}
exports.PropMetaData = PropMetaData;
exports.propMeta = new PropMetaData();
//# sourceMappingURL=PropMetaData.js.map