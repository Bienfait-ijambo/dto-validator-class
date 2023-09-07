import { TypeLength } from "../types/decorator.type";
import { IMessage } from "../types/decorator.interfaces";
type RequiredDecoratorType = {
    Length?: TypeLength;
    Regex?: string;
} & IMessage;
export declare function Required(param?: RequiredDecoratorType): (target: any, propertyKey: string) => void;
export {};
