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
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
const ValidateClassProperty_1 = require("./validators/ValidateClassProperty");
class MyClass {
    constructor(email, password, age) {
        this.email = email;
        this.password = password;
        this.age = age;
    }
    validate() {
        const validator = new ValidateClassProperty_1.ValidateClassProperty(this);
        const input = validator.verify(validator.validate());
        return Promise.resolve(input).catch(error => error);
    }
}
__decorate([
    (0, decorators_1.Required)({
        message: "Entre 2 et 20",
        Length: {
            min: 2,
            max: 20,
        },
    }),
    (0, decorators_1.IsEmail)({
        message: "Adresse mail invalide"
    }),
    __metadata("design:type", String)
], MyClass.prototype, "email", void 0);
__decorate([
    (0, decorators_1.IsNumber)({
        message: "Entre un nombre"
    }),
    __metadata("design:type", Number)
], MyClass.prototype, "age", void 0);
__decorate([
    (0, decorators_1.Required)({
        Length: {
            min: 6,
            max: 8,
        },
    }),
    __metadata("design:type", String)
], MyClass.prototype, "password", void 0);
// Instantiate the class
const myClass = new MyClass("bienfait", "password", 12);
// myClass.email = "bi@gmail.com";
// myClass.age=23
// myClass.password="password"
function insert() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const input = yield myClass.validate();
            console.log('input', input);
        }
        catch (error) {
            console.log('error : ', error.message);
        }
    });
}
insert();
//# sourceMappingURL=testing.js.map