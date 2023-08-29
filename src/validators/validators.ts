import { isNegativeNumber } from "../util/util";

export function isValidEmail(email:string):boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


export function isNotEmpty(str:string):boolean{
    return (typeof str !=='undefined' && str.length > 0)? true : false;
}


export function hasMinLength(str:string,min:number):boolean{

    return (isNotEmpty(str) && str.length >=min) ? true:false
   
}


export function hasMaxLength(str:string,max:number):boolean{
    return (isNotEmpty(str) && str.length <=max) ? true : false;
}

export function isNumber(param:string|number):boolean{

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


export function isBoolean(param:boolean):boolean{
    return (typeof param==='boolean') ? true:false
}

