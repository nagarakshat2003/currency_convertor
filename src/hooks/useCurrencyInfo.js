import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2e5536de32msh691d145a65680e0p1ad03djsnfad0cc77d101',
            'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };
    useEffect(()=>{
        fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?`,options).then((res) => res.json()).then((res) => setData(res.rates))
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo