import 'reflect-metadata';


export const VALIDATION_METADATA:string='validationRules';

export class PropMetaData implements IPropMetaData {

  

   storeMeta(rule: Record<string, any>, target: any) {
    const validationRules =
      Reflect.getMetadata(VALIDATION_METADATA, target) || [];
    validationRules.push(rule);
    Reflect.defineMetadata(VALIDATION_METADATA, validationRules, target);
  }
}

export const propMeta=new PropMetaData()



