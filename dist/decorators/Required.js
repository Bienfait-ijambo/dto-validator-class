"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const PropMetaData_1 = require("../metadata/PropMetaData");
const validations_1 = require("../validators/validations");
function Required(target, propertyKey) {
    const propMeta = new PropMetaData_1.PropMetaData();
    new CreateValidationRule_1.CreateValidationRule(propMeta)
        .execute(propertyKey, validations_1.ValidationList.REQUIRED, target);
}
exports.Required = Required;
//# sourceMappingURL=Required.js.map