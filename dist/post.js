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
// Custom decorator to define email validation
function IsEmail(target, propertyKey) {
    const validationRules = Reflect.getMetadata('validationRules', target) || [];
    validationRules.push({
        propertyKey,
        validator: 'IsEmail',
        message: 'Invalid email format',
    });
    Reflect.defineMetadata('validationRules', validationRules, target);
}
// Custom decorator to define length validation
function Length(min, max) {
    return function (target, propertyKey) {
        const validationRules = Reflect.getMetadata('validationRules', target) || [];
        validationRules.push({
            propertyKey,
            validator: 'Length',
            message: `Email length must be between ${min} and ${max} characters`,
            options: { min, max },
        });
        Reflect.defineMetadata('validationRules', validationRules, target);
    };
}
function Logs(data) {
    return function (target, property, descriptor) {
        Reflect.defineMetadata('Logger', data, target, property);
    };
}
function validate(target) {
    const validationRules = Reflect.getMetadata('validationRules', target) || [];
    // console.log(validationRules)
    const errors = [];
    for (const rule of validationRules) {
        const { propertyKey, validator, message, options } = rule;
        const value = target[propertyKey];
        if (validator === 'IsEmail') {
            if (!isValidEmail(value)) {
                errors.push(message);
            }
        }
        if (validator === 'Length') {
            const { min, max } = options;
            if (value.length < min || value.length > max) {
                errors.push(message);
            }
        }
    }
    return errors;
}
function isValidEmail(email) {
    // You can implement your own email validation logic here
    // For simplicity, we're assuming any string with '@' is a valid email
    return email.includes('@');
}
class Post {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Length(8, 18),
    IsEmail,
    __metadata("design:type", String)
], Post.prototype, "email", void 0);
const post = new Post('bien-----------------------------------------------------------------@gmail.com');
const validationErrors = validate(post);
console.log(validationErrors);
//# sourceMappingURL=post.js.map