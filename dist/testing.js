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
Object.defineProperty(exports, "__esModule", { value: true });
const IsEmail_1 = require("./decorators/IsEmail");
const Required_1 = require("./decorators/Required");
const ValidateClassProperty_1 = require("./validators/ValidateClassProperty");
class MyClass {
    validate() {
        const errors = new ValidateClassProperty_1.ValidateClassProperty(this);
        return errors;
    }
}
__decorate([
    (0, Required_1.Required)({
        message: "L'adresse mail est requis",
        Length: {
            min: 2,
            max: 10,
        },
    }),
    IsEmail_1.IsEmail,
    __metadata("design:type", String)
], MyClass.prototype, "email", void 0);
// Instantiate the class
const myClass = new MyClass();
myClass.email = "";
console.log(myClass.validate());
//# sourceMappingURL=testing.js.map