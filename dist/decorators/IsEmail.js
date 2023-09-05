"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmail = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const CreateValidationMetaData_1 = require("../metadata/CreateValidationMetaData");
const validationList_1 = require("../validators/validationList");
function IsEmail(target, propertyKey) {
    new CreateValidationRule_1.CreateValidationRule(CreateValidationMetaData_1.propMeta).execute({
        propertyKey: propertyKey,
        validationType: validationList_1.ValidationList.EMAIL,
        message: [],
        isValid: false,
    }, target);
}
exports.IsEmail = IsEmail;
//# sourceMappingURL=IsEmail.js.map