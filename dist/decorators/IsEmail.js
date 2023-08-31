"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmail = void 0;
const CreateValidationRule_1 = require("../metadata/CreateValidationRule");
const PropMetaData_1 = require("../metadata/PropMetaData");
const validations_1 = require("../validators/validations");
function IsEmail(target, propertyKey) {
    new CreateValidationRule_1.CreateValidationRule(PropMetaData_1.propMeta).execute(propertyKey, validations_1.ValidationList.EMAIL, target);
}
exports.IsEmail = IsEmail;
//# sourceMappingURL=IsEmail.js.map