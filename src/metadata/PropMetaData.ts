import "reflect-metadata";
import { IPropMetaData } from "./interfaces/IPropMetaData";

export class PropMetaData implements IPropMetaData {
  protected VALIDATION_METADATA: string = "validationRules";

  createMetaData(rule: Record<string, any>, target: any) {
    const validationRules =
      Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
    validationRules.push(rule);
    Reflect.defineMetadata(this.VALIDATION_METADATA, validationRules, target);
  }

  getMetaData(target: any): any {
    const validationRules =
      Reflect.getMetadata(this.VALIDATION_METADATA, target) || [];
    return validationRules;
  }
}

export const propMeta = new PropMetaData();
