import { ValidationList } from "../validators/validationList";
import { TypeValidationOperation } from "./decorator.type";
export interface ILength {
    min: number;
    max: number;
}
export interface IMessage {
    message?: string;
}
export interface SimpleDecorator<T extends ValidationList> {
    propertyKey: string;
    validationType: T;
    isValid: boolean;
    message: string[];
}
export interface DecoratorWithOperation<T extends ValidationList> extends SimpleDecorator<T> {
    operation: Array<TypeValidationOperation>;
}
