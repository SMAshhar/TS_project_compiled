/* This will take input for what currency should be converted into what currency.
Take amount to be converted. Convert it and return the converted value.

*/

function changeToPkr ():number {
    // Stating our currencies  
    console.log("Currencies available are : 'USD, PKR, SAR, AED, GBP'")


    // Defining conversion rates for PKR

    var currencyConversions = {
        'USD' : 220,
        'SAR' : 58.68,
        'AED' : 60.03,
        'GBP' : 248.50,
        'PKR' : 1,
    }

    // Asking for user currency
    var userCurrency: string = String(prompt("What currency are you holding? : ")).toUpperCase()
    console.log(`You have ${userCurrency} currency.`)

    // Asking for currency that we need to change into and its amount
    var requiredCurrency: string = String(prompt("What currency do you want it to convert to? : ")).toUpperCase()
    console.log(`You want it converted to ${requiredCurrency} currency.`)

    // Asking for amount
    var inputValue: number = Number(prompt("Please enter the amount you want to convert : "))
    return (inputValue * currencyConversions[userCurrency]) / currencyConversions[requiredCurrency]   
}

console.log(changeToPkr())

export { changeToPkr }


var sale = prompt("enter somehign");