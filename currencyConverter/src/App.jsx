import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCustomHook'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("inr")
  const [to , setTo] = useState("usd")
  const [convertedAmount , setCunvertedAmount ] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const opt = Object.keys(currencyInfo ?? '')

  const swap = () => {
    setFrom(to)
    setTo(from)
    setCunvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const converet = () => {
    setCunvertedAmount(amount * currencyInfo[to])

  }
 
   
  return (
    <div className="w-full h-auto my-4 flex-wrap    bg-slate-400  md:mx-4 p-4 flex justify-center md:flex-col items-center rounded-lg">
      <p className="text-slate-800 font-bold mb-4 md:text-2xl">Currency Converter</p>
      <form action=""
      onSubmit={(e) => {e.preventDefault()
        
      }
        }
      >
      <Input
       label="form"
       amount={amount}
       currencyOPtions={opt}
       onCurrencyChange={(currency) => setFrom(currency)}
       selectCurrency={from}
       onAmountChange={(amount) => setAmount(amount)}
      
      />
       <button className="bg-blue-600  text-white m-2"
       onClick={swap}
       >swap</button>
       <Input
        label="to"
        amount={convertedAmount}
        currencyOPtions={opt}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
        amountDisable
        
       
       />
      <button className="text-white bg-blue-600 mt-4" onClick={converet}>Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
      </form>
      
    </div>
  )
}

export default App
