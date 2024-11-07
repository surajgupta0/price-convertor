import { useState, useCallback } from "react";
import "./InputBox.css";

function InputBox({label, currentPrice = 0, setCurrentPrice, options = [], SelectedCurrency='usd', setSelectedCurrency, disable=false}){
    return(
        <div className="bg-white rounded pb-4 p-sm-3 my-2">
            <div className="row">
                <div className="col-sm-6 text-sm-start">
                    <p className="text-secondary font-weight-bold m-0"> {label} </p>
                    <input 
                        className="currency_input text-center text-sm-start" 
                        type="number" 
                        value={currentPrice} 
                        onChange={(e)=> setCurrentPrice(e.target.value)}
                        disabled={disable}
                        />
                </div>
                <div className="col-sm-6 text-sm-end">
                    <p className="text-secondary font-weight-bold">Currency Type</p>
                    <select 
                    className="custom-select"
                    value={SelectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}>
                        {options.map((option) => (
                            <option key={option} value={option} >
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default InputBox;