
import { DecoratorParamProperty, TypeValidationRule } from "../types/decorator.type";
import { ValidationList } from "../validators/validationList"
import { IPropMetaData } from "./interfaces/IPropMetaData";




export class CreateValidationRule{


    constructor(private meta:IPropMetaData){
      this.meta = meta;
    }
  
    execute<T extends string>(validationRule:DecoratorParamProperty<T>, target: any){
      
      const rule=this.createRule(validationRule)
      this.meta.createMetaData(rule, target);
    }
    

    private createRule<T extends ValidationList>(rule:TypeValidationRule<T>):TypeValidationRule<T> {
      return {
        propertyKey:rule.propertyKey,
        validationType:rule.validationType,
        operation:rule.operation,
        message:rule.message,
        isValid:false
       
      }
    }
  
  
  }