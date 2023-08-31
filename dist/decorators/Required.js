"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const PropMetaData_1 = require("../metadata/PropMetaData");
const validationList_1 = require("../validators/validationList");
function Required(param) {
    const validationRule = new CreateValidationRule_1.CreateValidationRule(PropMetaData_1.propMeta);
    return function (target, propertyKey) {
        if (typeof (param === null || param === void 0 ? void 0 : param.Length) !== "undefined") {
            validationRule.execute({
                propertyKey: propertyKey,
                validationType: validationList_1.ValidationList.REQUIRED,
                operation: [{ Length: param.Length }],
            }, target);
        }
        else {
            validationRule.execute({
                propertyKey: propertyKey,
                validationType: validationList_1.ValidationList.REQUIRED,
            }, target);
        }
    };
}
exports.Required = Required;
//# sourceMappingURL=Required.js.map