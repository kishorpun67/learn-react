import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/9ce05a012454b436def32303/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res['conversion_rates'][currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;