import { isNegativeNumber } from "../util/util";

export class Validator {
  public isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public isNotEmpty(str: string): boolean {
    return typeof str !== "undefined" && str.length > 0 ? true : false;
  }

  public;

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

  isNumber(param: string | number): boolean {
    if (!isNegativeNumber(param)) {
      if (typeof param === "string") {
        //convert to int
        const el = parseInt(param.toString());

        return !Number.isNaN(el) ? true : false;
      }

      if (typeof param === "number") {
        return !Number.isNaN(param) ? true : false;
      }
    } else {
      return false;
    }
  }

  public isBoolean(param: boolean): boolean {
    return typeof param === "boolean" ? true : false;
  }
}
