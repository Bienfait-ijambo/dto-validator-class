### DTO_VALIDATOR_CLASS


# Decorators
- Required
    - params : message
- Min & Max
    - params : message,number
- IsDate
    - params : message
- IsEmail
    - params : message
- IsNumber
    - params : message
- IsBool
    - params : message

# Errors

[
    {
        property :"name",
        isValidProp:boolean
        validators:["email","min","max"],
        validatorMessage: [{
            validator:"email",
            isValid:boolean,
            messageError:"message..."
        },{
            validator:"email",
            isValid:boolean,
            messageError:"message..."
        }], 

    }
]


## DtoValidate classe

- container the method to validator a class


## validation process
const {validInput,errors}=DtoValidate(input)

## Validators
- isNotempty
- min and max 
- isData
- isEmail
- isNumber 
- isBool