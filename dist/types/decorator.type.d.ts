import { ValidationList } from "../validators/validationList";
import {
  DecoratorWithOperation,
  ILength,
  IMessage,
  SimpleDecorator,
} from "./decorator.interfaces";
export type TypeLength = ILength;
export type TypeMessage = IMessage;
export type TypeRegex = string;
export type TypeValidationOperation = {
  Length?: TypeLength;
  regex?: TypeRegex;
};
export type TypeValidationRule<T extends ValidationList> = {
  propertyKey: string;
  validationType: T;
  operation?: Array<TypeValidationOperation>;
  message: string[];
  isValid: boolean;
};
export type DecoratorParamProperty<T extends string> =
  T extends ValidationList.EMAIL
    ? SimpleDecorator<T>
    : T extends ValidationList.REQUIRED
    ? DecoratorWithOperation<T> | SimpleDecorator<T>
    : T extends ValidationList.NUMBER
    ? SimpleDecorator<T>
    : T extends ValidationList.BOOL
    ? SimpleDecorator<T>
    : T extends ValidationList.DATE
    ? SimpleDecorator<T>
    : never;
