"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRule = exports.ValidateInput = void 0;
class ValidateInput {
}
exports.ValidateInput = ValidateInput;
function emailRule(input) {
    const validationRule = input.rules[input.index].validationType;
    if (validationRule === input.validation) {
        if (!this.isValidEmail(input.propValue)) {
            input.rules[input.index].message.push('Email is not valid !');
        }
        else {
            input.rules[input.index].isValid = true;
        }
    }
}
exports.emailRule = emailRule;
//# sourceMappingURL=ValidateInput.js.map