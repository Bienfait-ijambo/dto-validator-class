"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumber = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const CreateValidationMetaData_1 = require("../metadata/CreateValidationMetaData");
const validationList_1 = require("../validators/validationList");
function IsNumber(target, propertyKey) {
    new CreateValidationRule_1.CreateValidationRule(CreateValidationMetaData_1.propMeta).execute({
        propertyKey: propertyKey,
        validationType: validationList_1.ValidationList.NUMBER,
        message: [],
        isValid: false,
    }, target);
}
exports.IsNumber = IsNumber;
//# sourceMappingURL=IsNumber.js.map