import "reflect-metadata";
import { IPropMetaData } from "./interfaces/IPropMetaData";
import { ValidationList } from "../validators/validationList";
import { TypeValidationRule } from "../types/decorator.type";
/**
 * Create validation metadata
 */
export declare class CreateValidationMetaData implements IPropMetaData {
    protected VALIDATION_METADATA: string;
    /**
     *
     * @param rule
     * @param target
     * create metadata
     */
    createMetaData<T extends ValidationList>(rule: TypeValidationRule<T>, target: any): void;
    /**
     *
     * @param target
     * @returns metadata added to a given class
     */
    getMetaData(target: any): any;
}
export declare const propMeta: CreateValidationMetaData;
