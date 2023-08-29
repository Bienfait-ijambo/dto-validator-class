"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
const util_1 = require("../util/util");
const rules_1 = require("../validators/rules");
function Required(target, propertyKey) {
    (0, util_1.addValidationRule)({ required: rules_1.rulesArray.required, prop: propertyKey }, target);
}
exports.Required = Required;
//# sourceMappingURL=Required.js.map