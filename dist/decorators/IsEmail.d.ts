import { IMessage } from "../types/decorator.interfaces";
type EmailDecoratorType = {} & IMessage;
export declare function IsEmail(param?: EmailDecoratorType): (target: any, propertyKey: string) => void;
export {};
