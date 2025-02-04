import React, {useId} from "react";

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOPtions = [],
    selectCurrency= "inr",
    amountDisable = false ,
    currencyDisable = false


  }) {
    console.dir(`label : ${label} amount : ${amount}
      onAmountChange :${onAmountChange} onCurrencyChange : ${onCurrencyChange}
    selectCurrency : ${selectCurrency}
      `);
    const amountInputId = useId()
    return(
           <div  className="md:min-w-96 h-auto  flex flex-col justify-center">
             <div className="flex flex-col bg-white text-black px-2 py-2 rounded-md ">
                 <div className="flex  justify-between text-slate-600 mb-20">
                       <label htmlFor={amountInputId} >
                         {label}
                        </label>
                        <p>Currency Type</p>
                 </div>
                 <div className="flex justify-between text-slate-600 bg-white w-full">
                        <input 
                        id={amountInputId}
                        value={amount }
                        disabled={amountDisable}
                        onChange={(e) => onAmountChange(e.target.value) } 
                        className=" bg-white text-black shrink-0 w-[60%] md:w-auto h-8 rounded-md " />
                        <select 
                        className="bg-slate-300"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange(e.target.value)}
                       
                        >
                          {currencyOPtions.map((currency) => (
                            <option key={currency} >{currency}</option>
                          ) )}
                         </select>
                 </div>
             </div>
          </div>
           
       
    )
} 

export default Input