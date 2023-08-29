"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const rules_1 = require("../../validators/rules");
const IsEmail_1 = require("../../decorators/IsEmail");
(0, node_test_1.default)("Util test suite", (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t.test("should  added rule exist in rulesArray", (t) => __awaiter(void 0, void 0, void 0, function* () {
        class MyClass {
        }
        __decorate([
            IsEmail_1.IsEmail,
            __metadata("design:type", String)
        ], MyClass.prototype, "email", void 0);
        const myClass = new MyClass();
        const validationRules = Reflect.getMetadata("validationRules", myClass) || [];
        const emailProp = Reflect.get(rules_1.rulesArray, "email");
        node_assert_1.default.deepStrictEqual([
            {
                email: emailProp,
            },
        ], validationRules);
    }));
}));
//# sourceMappingURL=decorators.js.map