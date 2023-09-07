export declare class Validator {
    isValidEmail(email: string): boolean;
    isNotEmpty(value: string): boolean;
    hasMinLength(str: string, min: number): boolean;
    hasMaxLength(str: string, max: number): boolean;
    hasValidLength(value: string, min: number, max: number): boolean;
    isNumber(value: string | number): boolean;
    isBoolean(param: boolean): boolean;
    isValidDate(dateString: any): boolean;
}
