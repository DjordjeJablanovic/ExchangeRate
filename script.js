const fromInputText = document.getElementById('from--input')
const toInputText = document.getElementById('to--input')
const fromValute = document.getElementById('from--valute');
const toValute = document.getElementById('to--valute');
const btn = document.getElementById('btn');

// console.log(fromValute, toValute)

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('select').selected = true;
})

    function toValuteFunc(){
        
        btn.addEventListener('click', () =>{
            if(fromValute.value == 'RSD' && toValute.value == 'USD'){
                fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/rsd/usd.json') // RSD INTO DOLLAR
        .then(response =>{
            return response.json()
        }).then(json => {
            // console.log(json.usd)  how mouch RSD is 1 DOLLAR
            let dinarValue = fromInputText.value
            dinarValue = parseInt(dinarValue);
            let finalValue = json.usd * dinarValue;
            toInputText.value = finalValue;
            // console.log(finalValue);
        }).catch(err => {
            console.log('error ' + err)
        });
            } else if(fromValute.value == 'RSD' && toValute.value == 'EUR'){
                fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/rsd/eur.json') // RSD INTO EUR
        .then(response =>{
            return response.json()
        }).then(json => {
            // console.log(json.eur)  how mouch RSD is 1 EUR
            let dinarValue = fromInputText.value
            dinarValue = parseInt(dinarValue);
            let finalValue = json.eur * dinarValue;
            toInputText.value = finalValue;
            // console.log(finalValue);
        }).catch(err => {
            console.log('error ' + err)
        });
            } else if(fromValute.value == 'EUR' && toValute.value == 'USD'){
                fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json') // EUR INTO USD
        .then(response =>{
            return response.json()
        }).then(json => {
            // console.log(json.eur)  how mouch RSD is 1 EUR
            let euroValue = fromInputText.value
            euroValue = parseInt(euroValue);
            let finalValue = json.usd * euroValue;
            toInputText.value = finalValue;
            // console.log(finalValue);
        }).catch(err => {
            console.log('error ' + err)
        });
            } else if(fromValute.value == 'EUR' && toValute.value == 'RSD'){
                fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/rsd.json') // EUR INTO RSD
        .then(response =>{
            return response.json()
        }).then(json => {
            // console.log(json.eur)  how mouch RSD is 1 EUR
            let euroValue = fromInputText.value
            euroValue = parseInt(euroValue);
            let finalValue = json.rsd * euroValue;
            toInputText.value = finalValue;
            // console.log(finalValue);
        }).catch(err => {
            console.log('error ' + err)
        });
            } else if(fromValute.value == 'USD' && toValute.value == 'RSD'){
                fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/rsd.json') // USD INTO RSD
        .then(response =>{
            return response.json()
        }).then(json => {
            // console.log(json.eur)  how mouch RSD is 1 EUR
            let usDollarValue = fromInputText.value
            usDollarValue = parseInt(usDollarValue);
            let finalValue = json.rsd * usDollarValue;
            toInputText.value = finalValue;
            // console.log(finalValue);
        }).catch(err => {
            console.log('error ' + err)
        });
            } else if(fromValute.value == 'USD' && toValute.value == 'EUR'){
                fetch ('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json') // USD INTO EUR
        .then(response =>{
            return response.json()
        }).then(json => {
            // console.log(json.eur)  how mouch RSD is 1 EUR
            let usDollarValue = fromInputText.value
            usDollarValue = parseInt(usDollarValue);
            let finalValue = json.eur * usDollarValue;
            toInputText.value = finalValue;
            // console.log(finalValue);
        }).catch(err => {
            console.log('error ' + err)
        });
            }
        })
    }