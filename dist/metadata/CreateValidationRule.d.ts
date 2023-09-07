import { DecoratorParamProperty } from "../types/decorator.type";
import { IPropMetaData } from "./interfaces/IPropMetaData";
export declare class CreateValidationRule {
    private meta;
    constructor(meta: IPropMetaData);
    execute<T extends string>(validationRule: DecoratorParamProperty<T>, target: any): void;
    private createRule;
}
