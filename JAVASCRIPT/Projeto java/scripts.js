const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertSelect = document.querySelector(".convert-select")

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currencyNameConvert = document.getElementById("currency-convert")
    const currencyImageConvert = document.querySelector(".currency-img-convert")

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    } else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libras"
        currencyImg.src = "./assets/libra.png"
    } else if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    if (convertSelect.value === "eua") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/dolar.png"
    } else if (convertSelect.value === "europa") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/euro.png"
    } else if (convertSelect.value === "inglaterra") {
        currencyNameConvert.innerHTML = "Libras"
        currencyImageConvert.src = "./assets/libra.png"
    } else if (convertSelect.value === "brasil") {
        currencyNameConvert.innerHTML = "Real"
        currencyImageConvert.src = "./assets/real.png"
    }

    convertValues();
}

function convertValues() {
    const inputCurrencyOneValue = document.querySelector(".input-currency").value
    const inputCurrencyValue = inputCurrencyOneValue.replace(",", ".")
    const currencyValueToConvert = document.querySelector("#real") // VALOR EM REAL
    const currencyValuetoConverted = document.querySelector("#currency-value") // OUTRAS MOEDAS

    const dolarToday = 4.82
    const euroToday = 5.22
    const libraToday = 6.10
    const realToday = 1.00

    if (convertSelect.value === "brasil" && currencySelect.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } else if (convertSelect.value === "brasil" && currencySelect.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    } else if (convertSelect.value === "eua" && currencySelect.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    } else if (convertSelect.value === "brasil" && currencySelect.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    } else if (convertSelect.value === "eua" && currencySelect.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    } else if (convertSelect.value === "inglaterra" && currencySelect.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    } else if (convertSelect.value === "europa" && currencySelect.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    } else if (convertSelect.value === "inglaterra" && currencySelect.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday / dolarToday)
    } else if (convertSelect.value === "inglaterra" && currencySelect.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    } else if (convertSelect.value === "inglaterra" && currencySelect.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * libraToday / euroToday)
    } else if (convertSelect.value === "eua" && currencySelect.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolarToday / libraToday)
    } else if (convertSelect.value === "eua" && currencySelect.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    } else if (convertSelect.value === "europa" && currencySelect.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    } else if (convertSelect.value === "europa" && currencySelect.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * euroToday / libraToday)
    } else if (convertSelect.value === "europa" && currencySelect.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
}

convertSelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

