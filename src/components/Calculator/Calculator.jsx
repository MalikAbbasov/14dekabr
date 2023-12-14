import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { divide, multip, sub, sum } from './calculatorSlice'

function Calculator() {


    const dispatch=useDispatch()
    const [val1, setVal1] = useState("")
    const [val2, setVal2] = useState("")
  return (
    <div>
        <input type="text" value={val1} onChange={(e)=>setVal1(e.target.value)} />
        <input type="text" value={val2} onChange={(e)=>setVal2(e.target.value)}/>

        <button onClick={()=>dispatch(sum())}>+</button>
        <button onClick={()=>dispatch(sub())}>-</button>
        <button onClick={()=>dispatch(multip())}>*</button>
        <button onClick={()=>dispatch(divide())}>/</button>
    </div>
  )
}

export default Calculator