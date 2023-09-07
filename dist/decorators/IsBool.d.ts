import { IMessage } from "../types/decorator.interfaces";
type IsBoolDecoratorType = {} & IMessage;
export declare function IsBool(param?: IsBoolDecoratorType): (target: any, propertyKey: string) => void;
export {};
