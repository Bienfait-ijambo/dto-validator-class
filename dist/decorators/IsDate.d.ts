import { IMessage } from "../types/decorator.interfaces";
type IsDateDecoratorType = {} & IMessage;
export declare function IsDate(param?: IsDateDecoratorType): (target: any, propertyKey: string) => void;
export {};
