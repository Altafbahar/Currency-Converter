
let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
let result = document.querySelector("#result");


currencies.forEach((currency) => {
    const option = document.createElement("option");
 option.value = currency;
 option.text = currency;
 fromDropDown.add(option);
});


currencies.forEach((currency) => {
    const option = document.createElement("option");
 option.value = currency;
 option.text = currency;
 toDropDown.add(option);
});

fromDropDown.value = "EUR";
toDropDown.value = "AFN"

let convertCurrency = () => {
    const amount = document.getElementById("amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.length !== 0) {
        fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
        
            const fromExchangeRate = data.conversion_rates[fromCurrency];
            const toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
         

          
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("Error fetching exchange rates. Please try again.");
        });
    } else {
        alert("Please enter an amount to convert.");
    }
};



document.querySelector("#convert-button").addEventListener("click",convertCurrency);
window.addEventListener("load", convertCurrency);