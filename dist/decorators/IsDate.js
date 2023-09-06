"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDate = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const CreateValidationMetaData_1 = require("../metadata/CreateValidationMetaData");
const validationList_1 = require("../validators/validationList");
function IsDate(param) {
    return function (target, propertyKey) {
        new CreateValidationRule_1.CreateValidationRule(CreateValidationMetaData_1.propMeta).execute({
            propertyKey: propertyKey,
            validationType: validationList_1.ValidationList.DATE,
            message: !(param === null || param === void 0 ? void 0 : param.message) ? [] : [param.message],
            isValid: false,
        }, target);
    };
}
exports.IsDate = IsDate;
//# sourceMappingURL=IsDate.js.map