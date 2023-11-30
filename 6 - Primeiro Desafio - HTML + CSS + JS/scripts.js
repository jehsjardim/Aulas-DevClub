const convertButton = document.querySelector(".convert-button")
const currencySelectDe = document.querySelector(".currency-select-de")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const realToday = 1.0
    const dolarToday = 4.88
    const euroToday = 5.36
    const libraToday = 6.19
    const bitcoinToday = 183033.11

    if (currencySelect.value == "dolar") {
        // Se o select estiver selecionado o valor do dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor do euro, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        // Se o select estiver selecionado o valor do dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
   
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelectDe.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

if (currencySelectDe.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}

if (currencySelectDe.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
}

if (currencySelectDe.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
}

if (currencySelectDe.value == "bitcoin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)
}
}

function changeCurrencyDe() {
    const currencyNameDe = document.getElementById("currency-name-de")
    const currencyImageDe = document.querySelector(".currency-img-de")
    
    if (currencySelectDe.value == "dolar") {
        currencyNameDe.innerHTML = "Dolar Americano"
        currencyImageDe.src = "./assets/dolar2.png"
    }

    if (currencySelectDe.value == "real") {
        currencyNameDe.innerHTML = "Real Brasileiro"
        currencyImageDe.src = "./assets/real2.png"
    }

    if (currencySelectDe.value == "euro") {
        currencyNameDe.innerHTML = "Euro"
        currencyImageDe.src = "./assets/euro2.png"
    }

    if (currencySelectDe.value == "libra") {
        currencyNameDe.innerHTML = "Libra"
        currencyImageDe.src = "./assets/libra2.png"
    }

    if (currencySelectDe.value == "bitcoin") {
        currencyNameDe.innerHTML = "Bitcoin"
        currencyImageDe.src = "./assets/bitcoin2.png"
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelectDe.addEventListener("change", changeCurrencyDe)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
