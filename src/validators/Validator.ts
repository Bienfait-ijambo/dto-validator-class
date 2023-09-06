import { isNegativeNumber } from "../util/util";

export class Validator {
  public isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public isNotEmpty(str: string): boolean {
    return typeof str !== "undefined" && str.length > 0 ? true : false;
  }


  hasMinLength(str: string, min: number): boolean {
    return this.isNotEmpty(str) && str.length >= min ? true : false;
  }

  hasMaxLength(str: string, max: number): boolean {
    return this.isNotEmpty(str) && str.length <= max ? true : false;
  }

  hasValidLength(str:string,min:number,max:number): boolean {
    const hasValidLength=str.length>=min && str.length<=max
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
