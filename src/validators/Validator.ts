import { isNegativeNumber } from "../util/util";



 export class Validator{
    
 protected isValidEmail(email:string):boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


 protected isNotEmpty(str:string):boolean{
    return (typeof str !=='undefined' && str.length > 0)? true : false;
}


 protected hasMinLength(str:string,min:number):boolean{

    return (this.isNotEmpty(str) && str.length >=min) ? true:false
   
}


  hasMaxLength(str:string,max:number):boolean{
    return (this.isNotEmpty(str) && str.length <=max) ? true : false;
}

 private isNumber(param:string|number):boolean{

    if(!isNegativeNumber(param)){
        if(typeof param === 'string'){
            //convert to int
            const el=parseInt(param.toString())
    
            return (!Number.isNaN(el)) ? true:false
        }
    
        if(typeof param === 'number'){
            return (!Number.isNaN(param)) ? true:false
            
        }
    }else{
        return false
    }

   
}


 private isBoolean(param:boolean):boolean{
    return (typeof param==='boolean') ? true:false
}


}