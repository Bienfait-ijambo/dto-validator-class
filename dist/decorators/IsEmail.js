"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmail = void 0;
const util_1 = require("../util/util");
const rules_1 = require("../validators/rules");
function IsEmail(target, propertyKey) {
    (0, util_1.addValidationRule)({ email: rules_1.rulesArray.email, prop: propertyKey }, target);
}
exports.IsEmail = IsEmail;
//# sourceMappingURL=IsEmail.js.map