export function isNegativeNumber(parm: number|string): boolean {

    const val=parseInt(parm.toString())
    
    return (val<0) ? true : false
}

function addValidationRule(){
    
}