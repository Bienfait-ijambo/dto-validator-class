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
        return typeof str !== "undefined" && str.length > 0 ? true : false;
    }
    hasMinLength(str, min) {
        return this.isNotEmpty(str) && str.length >= min ? true : false;
    }
    hasMaxLength(str, max) {
        return this.isNotEmpty(str) && str.length <= max ? true : false;
    }
    hasValidLength(str, min, max) {
        const hasValidLength = str.length >= min && str.length <= max;
        return hasValidLength;
    }
    isNumber(param) {
        if (!(0, util_1.isNegativeNumber)(param)) {
            if (typeof param === "string") {
                //convert to int
                const el = parseInt(param.toString());
                return !Number.isNaN(el) ? true : false;
            }
            if (typeof param === "number") {
                return !Number.isNaN(param) ? true : false;
            }
        }
        else {
            return false;
        }
    }
    isBoolean(param) {
        return typeof param === "boolean" ? true : false;
    }
    isValidDate(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        const isValidFormat = regex.test(dateString);
        return isValidFormat ? true : false;
        //   const date = new Date(dateString);
        //   return !isNaN(date.getTime());
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map