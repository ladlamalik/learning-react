import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index'

function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setId] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    to(from)
    setConvertedAmount(amount)
    setConvertedAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>
        Currency App
      </h1>
    </>
  )
}

export default App
