import { ValidationList } from "../validators/validations"

export interface IRule{
    message: Array<string>;
    isValid: boolean;
}
export interface ICreateValidationRule{
    property:string
    validationType:ValidationList,
    rule:IRule
}

export class CreateValidationRule{


    constructor(private meta:IPropMetaData){
      this.meta = meta;
    }
  
    execute(propertyKey:string,validationType:ValidationList, target: any){
      
      const rule=this.createRule(propertyKey,validationType)
      this.meta.storeMeta(rule, target);
    }
    

    private createRule(propertyKey:string,validationType:ValidationList):ICreateValidationRule{
      return {
        property:propertyKey,
        validationType:validationType,
        rule:{
          message:[],
          isValid:false
        }
      }
    }
  
  
  }