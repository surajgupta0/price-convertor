import { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [fromPrice, setFromPrice] = useState(1)
  const [toPrice, setToPrice] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let currencyConvertUrl =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;
    fetch(currencyConvertUrl)
    .then(response => response.json())
    .then(data => {
      let fetchPrice = data[fromCurrency][toCurrency]
      setToPrice((fromPrice * fetchPrice).toFixed(6));
    })
  }, [fromPrice, fromCurrency, toCurrency]);


  useEffect(() => {
    const currencyUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';
    fetch(currencyUrl)
      .then(response => response.json())
      .then(data => setOptions(Object.keys(data)));
  }, []);

  return (
    <>
    <div className='price_container border p-3 rounded'>
      <h2 className='text-center text-white'>Currency Converter</h2>
      <InputBox label="From" currentPrice={fromPrice} setCurrentPrice={setFromPrice} options = {options} SelectedCurrency = {fromCurrency} setSelectedCurrency = {setFromCurrency} />
      <div className='position-relative'>
        <button className='swap_btn btn btn-primary position-absolute' 
        onClick = {(e)=>{
          let temp = fromCurrency
          setFromCurrency(toCurrency)
          setToCurrency(temp)

          let tempPrice = toPrice
          setToPrice(fromPrice)
          setFromPrice(tempPrice)

        }}> <i className="bi bi-arrow-down-up"></i> Swap</button>
      </div>
      <InputBox label="To" currentPrice={toPrice} setCurrentPrice={setToPrice} options = {options} SelectedCurrency = {toCurrency} setSelectedCurrency = {setToCurrency} disable={true}/>
    </div>
    </>
  )
}

export default App
