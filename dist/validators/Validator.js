"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const util_1 = require("../util/util");
class Validator {
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    isNotEmpty(str) {
        return (typeof str !== 'undefined' && str.length > 0) ? true : false;
    }
    hasMinLength(str, min) {
        return (this.isNotEmpty(str) && str.length >= min) ? true : false;
    }
    hasMaxLength(str, max) {
        return (this.isNotEmpty(str) && str.length <= max) ? true : false;
    }
    isNumber(param) {
        if (!(0, util_1.isNegativeNumber)(param)) {
            if (typeof param === 'string') {
                //convert to int
                const el = parseInt(param.toString());
                return (!Number.isNaN(el)) ? true : false;
            }
            if (typeof param === 'number') {
                return (!Number.isNaN(param)) ? true : false;
            }
        }
        else {
            return false;
        }
    }
    isBoolean(param) {
        return (typeof param === 'boolean') ? true : false;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map