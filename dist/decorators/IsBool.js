"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBool = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const CreateValidationMetaData_1 = require("../metadata/CreateValidationMetaData");
const validationList_1 = require("../validators/validationList");
function IsBool(target, propertyKey) {
    new CreateValidationRule_1.CreateValidationRule(CreateValidationMetaData_1.propMeta).execute({
        propertyKey: propertyKey,
        validationType: validationList_1.ValidationList.BOOL,
        message: [],
        isValid: false,
    }, target);
}
exports.IsBool = IsBool;
//# sourceMappingURL=IsBool.js.map