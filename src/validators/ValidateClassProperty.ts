import { CreateValidationMetaData } from "../metadata/CreateValidationMetaData";
import { TypeValidationOperation, TypeValidationRule } from "../types/decorator.type";
import { Validator } from "./Validator";
import { ValidationList } from "./validationList";

/**
 * This class allows to validate a class that holds  metadata
 */
export class ValidateClassProperty extends Validator{

    private target:any
    
  
    constructor(target:any){
        super()
        this.target=target
        
      this.validateRules()
    }

    private getMetaData<T extends ValidationList>():TypeValidationRule<T>[] {
      
        const propMetaData=new CreateValidationMetaData()
        const metadata=propMetaData.getMetaData(this.target)
        return metadata
    }

   


   private validateRules(){
        const rules=this.getMetaData()
      
     for(let index=0;index<rules.length;index++){
        const propValue=this.target[rules[index].propertyKey]

        //email
        if(rules[index].validationType===ValidationList.EMAIL){

            if(!this.isValidEmail(propValue)){
                rules[index].message.push('Email is not valid !')
               
              
            }
        }

        //required
        if(rules[index].validationType===ValidationList.REQUIRED){
            if(!this.isNotEmpty(propValue)){
                rules[index].message.push('This property is required !')
               
            }
        }

        //boolen
        if(rules[index].validationType===ValidationList.BOOL){
            if(!this.isBoolean(propValue)){
                rules[index].message.push('This property must be a boolean')
               
            }
        }

        //is number

        if(rules[index].validationType===ValidationList.NUMBER){
            if(!this.isBoolean(propValue)){
                rules[index].message.push('This property must be a number')
               
            }
        }


        //date

        if(rules[index].validationType===ValidationList.DATE){
            if(!this.isValidDate(propValue)){
                rules[index].message.push('Date must be a valid date')
            }
        }



        //operations
        const operation:TypeValidationOperation[]=rules[index].operation
        
        if(typeof operation!=='undefined'){
            const minLength=rules[index].operation[0].Length.min
            const maxLength=rules[index].operation[0].Length.max
            if(!!operation.length){

             

            if(!this.hasValidLength(propValue,minLength,maxLength)){
                rules[index].message.push(`This property must be between ${minLength} and ${maxLength} characters`)

            }

             
               
            }
        } 
       
     }



     console.log('rules', rules)

    
    }


    // private addCustomMessage(message:string,ruleArray:TypeValidationRule[]){

    // }


    
}


