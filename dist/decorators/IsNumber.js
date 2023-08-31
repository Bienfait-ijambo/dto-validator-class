"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumber = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const PropMetaData_1 = require("../metadata/PropMetaData");
const validationList_1 = require("../validators/validationList");
function IsNumber(target, propertyKey) {
    new CreateValidationRule_1.CreateValidationRule(PropMetaData_1.propMeta)
        .execute({ propertyKey: propertyKey, validationType: validationList_1.ValidationList.NUMBER }, target);
}
exports.IsNumber = IsNumber;
//# sourceMappingURL=IsNumber.js.map