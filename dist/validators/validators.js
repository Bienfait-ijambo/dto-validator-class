"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isNumber = exports.hasMaxLength = exports.hasMinLength = exports.isNotEmpty = exports.isValidEmail = exports.Validator = void 0;
const util_1 = require("../util/util");
class Validator {
}
exports.Validator = Validator;
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.isValidEmail = isValidEmail;
function isNotEmpty(str) {
    return (typeof str !== 'undefined' && str.length > 0) ? true : false;
}
exports.isNotEmpty = isNotEmpty;
function hasMinLength(str, min) {
    return (isNotEmpty(str) && str.length >= min) ? true : false;
}
exports.hasMinLength = hasMinLength;
function hasMaxLength(str, max) {
    return (isNotEmpty(str) && str.length <= max) ? true : false;
}
exports.hasMaxLength = hasMaxLength;
function isNumber(param) {
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
exports.isNumber = isNumber;
function isBoolean(param) {
    return (typeof param === 'boolean') ? true : false;
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=validators.js.map