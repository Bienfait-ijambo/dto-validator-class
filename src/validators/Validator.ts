import { isNegativeNumber } from "../util/util";

export class Validator {
  public isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public isNotEmpty(value: string): boolean {

    if(typeof value==='undefined') return false;

    return  value.length > 0 ? true : false;
  }


  hasMinLength(str: string, min: number): boolean {
    return this.isNotEmpty(str) && str.length >= min ? true : false;
  }

  hasMaxLength(str: string, max: number): boolean {
    return this.isNotEmpty(str) && str.length <= max ? true : false;
  }

  hasValidLength(value:string,min:number,max:number): boolean {
   
    if(typeof value==='undefined') return false;

    const hasValidLength=value.length>=min && value.length<=max
    return hasValidLength
                
  }

  isNumber(value: string | number): boolean {
    return typeof value === 'number' && !isNaN(value) ? true : false;
  }

  public isBoolean(param: boolean): boolean {
    return typeof param === "boolean" ? true : false;
  }

  isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
     const isValidFormat= regex.test(dateString);

     return isValidFormat ? true : false;

    //   const date = new Date(dateString);
    //   return !isNaN(date.getTime());
    

  }
}
