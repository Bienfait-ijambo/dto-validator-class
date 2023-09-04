import { PropMetaData } from "../metadata/PropMetaData";
import { TypeValidationOperation, TypeValidationRule } from "../types/decorator.type";
import { Validator } from "./Validator";
import { ValidationList } from "./validationList";

export class ValidateClassProperty extends Validator{

    private target:any
    
  
    constructor(target:any){
        super()
        this.target=target
        
      this.processEmailRule()
    }

    private getMetaData():TypeValidationRule[] {
      
        const propMetaData=new PropMetaData()
        const metadata=propMetaData.getMetaData(this.target)
        return metadata
    }


   private processEmailRule(){
        const rules=this.getMetaData()
      
     for(let index=0;index<rules.length;index++){
        const propValue=this.target[rules[index].propertyKey]

        if(rules[index].validationType===ValidationList.EMAIL){

            if(!this.isValidEmail(propValue)){
                rules[index].message.push('Email is not valid !')
            }
        }


        // const operation:TypeValidationOperation[]=rules[index].operation
        
        // if(typeof operation!=='undefined'){
        //     const minLength=rules[index].operation[0].Length.min
        //     const maxLength=rules[index].operation[0].Length.max

        //     if(!!operation.length){
        //         if(!this.hasMinLength(propValue,minLength)){
        //              rules[index].message.push(`Minimum length is ${minLength}`)
        //         }

        //         if(!this.hasMaxLength(propValue,maxLength)){
        //             rules[index].message.push(`Minimum length is ${maxLength}`)

        //        }
        //     }
        // } 
       
     }

    
    }

    processRequiredRule(){
        const rules=this.getMetaData()
      
        for(let index=0;index<rules.length;index++){
           const propValue=this.target[rules[index].propertyKey]
   
           if(rules[index].validationType===ValidationList.EMAIL){
   
               if(!this.isNotEmpty(propValue)){
                   rules[index].message.push('This property is required')
               }
           }
   
   
           const operation:TypeValidationOperation[]=rules[index].operation
           
           if(typeof operation!=='undefined'){
               const minLength=rules[index].operation[0].Length.min
               const maxLength=rules[index].operation[0].Length.max
   
               if(!!operation.length){
                   if(!this.hasMinLength(propValue,minLength)){
                        rules[index].message.push(`Minimum length is ${minLength}`)
                   }
   
                   if(!this.hasMaxLength(propValue,maxLength)){
                       rules[index].message.push(`Minimum length is ${maxLength}`)
   
                  }
               }
           } 
          
        }
   
    }

    
}


