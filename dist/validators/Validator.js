"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
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
    isNumber(value) {
        return typeof value === 'number' && !isNaN(value) ? true : false;
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