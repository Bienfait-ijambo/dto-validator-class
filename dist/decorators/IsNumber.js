"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumber = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const PropMetaData_1 = require("../metadata/PropMetaData");
const validations_1 = require("../validators/validations");
function IsNumber(target, propertyKey) {
    const propMeta = new PropMetaData_1.PropMetaData();
    new CreateValidationRule_1.CreateValidationRule(propMeta)
        .execute(propertyKey, validations_1.ValidationList.NUMBER, target);
}
exports.IsNumber = IsNumber;
//# sourceMappingURL=IsNumber.js.map