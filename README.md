# dto-validator-class

### decorators

- [] IsBool 
    params : message :string

- []Length 
    params : message :string, length :{
        min :number, max :number
    }
- [] Required 
    params : message :string
    operations :Array<length :{
        min :number, max :number
    }>

- []IsDate 
    params : message :string


### Operations
[
    {
        length :{
            min:
            max:
        }
    },
    regex:'//'
]