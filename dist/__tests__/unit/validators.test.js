"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_assert_1 = __importDefault(require("node:assert"));
const node_test_1 = __importDefault(require("node:test"));
const Validator_1 = require("../../validators/Validator");
const v = new Validator_1.Validator();
(0, node_test_1.default)("should return true or false", (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t.test("Test emails", (t) => __awaiter(void 0, void 0, void 0, function* () {
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isValidEmail("bienfait@gmail.com");
            node_assert_1.default.strictEqual(isValid, true);
        }));
        yield t.test("Should return false", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isValidEmail("bienfaitgmail.com");
            node_assert_1.default.strictEqual(isValid, false);
        }));
    }));
    yield t.test("Test isNotEmpty func", (t) => __awaiter(void 0, void 0, void 0, function* () {
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isNotEmpty("bienfai");
            node_assert_1.default.strictEqual(isValid, true);
        }));
        yield t.test("Should return false", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isNotEmpty("");
            node_assert_1.default.strictEqual(isValid, false);
        }));
    }));
    yield t.test("Test hasMaxLength func", (t) => __awaiter(void 0, void 0, void 0, function* () {
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.hasMaxLength("bien", 4);
            node_assert_1.default.strictEqual(isValid, true);
        }));
        yield t.test("Should return false", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.hasMaxLength("en", 4);
            node_assert_1.default.strictEqual(isValid, true);
        }));
    }));
    yield t.test("Test hasMinLength func", (t) => __awaiter(void 0, void 0, void 0, function* () {
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.hasMinLength("bien", 4);
            node_assert_1.default.strictEqual(isValid, true);
        }));
        yield t.test("Should return false", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.hasMinLength("en", 4);
            node_assert_1.default.strictEqual(isValid, false);
        }));
    }));
    yield t.test("Test isNumber func", (t) => __awaiter(void 0, void 0, void 0, function* () {
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isNumber(2);
            node_assert_1.default.strictEqual(isValid, true);
        }));
        yield t.test("Should return false", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isNumber("en");
            node_assert_1.default.strictEqual(isValid, false);
        }));
    }));
    yield t.test("Test isBoolean func", (t) => __awaiter(void 0, void 0, void 0, function* () {
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isBoolean(true);
            node_assert_1.default.strictEqual(isValid, true);
        }));
        yield t.test("Should return true", (t) => __awaiter(void 0, void 0, void 0, function* () {
            const isValid = v.isBoolean(false);
            node_assert_1.default.strictEqual(isValid, true);
        }));
    }));
}));
//# sourceMappingURL=validators.test.js.map