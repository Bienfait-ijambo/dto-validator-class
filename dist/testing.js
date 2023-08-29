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
require("reflect-metadata");
function IsInt(target, propertyKey) {
    // return function() {
    const validationRules = Reflect.getMetadata('validationRules', target) || [];
    validationRules.push({
        valiation: 'Int',
        message: 'Must be an integer',
        isValid: false
    });
    Reflect.defineMetadata('validationRules', validationRules, target);
    // };
}
function IsEmail(target, propertyKey) {
    // return function(target: any, propertyKey: string) {
    const validationRules = Reflect.getMetadata('validationRules', target) || [];
    validationRules.push({
        valiation: 'email',
        message: 'Email is required',
        isValid: false
    });
    Reflect.defineMetadata('validationRules', validationRules, target);
    // };
}
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
        Reflect.defineMetadata('func:metadata', '-->func:O1', target);
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
        Reflect.defineMetadata('func:metadata', '-->func:O2', target);
    };
}
class MyClass {
    constructor(email) {
        this.email = email;
    }
    checker() {
    }
}
__decorate([
    IsInt,
    IsEmail,
    __metadata("design:type", String)
], MyClass.prototype, "email", void 0);
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "checker", null);
// Instantiate the class
const myClass = new MyClass('e');
// const validationRules = Reflect.getMetadata('validationRules', myClass)
// console.log(validationRules)
// console.log('instance: ' + JSON.stringify(instance))
function validate(target) {
    const validationRules = Reflect.getMetadata('validationRules', target) || [];
    console.log(validationRules);
}
const v = validate(myClass);
//# sourceMappingURL=testing.js.map