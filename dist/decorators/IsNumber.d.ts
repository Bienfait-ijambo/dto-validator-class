import { IMessage } from "../types/decorator.interfaces";
type IsNumberDecoratorType = {} & IMessage;
export declare function IsNumber(param?: IsNumberDecoratorType): (target: any, propertyKey: string) => void;
export {};
