
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {  decrementByAmount, incrementByAmount } from './components/counter/counterSlice';
import { addTodo } from './components/todo/todoSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Calculator from './components/Calculator/Calculator';
function App() {

const count = useSelector(state=>state.counter.value)
const dispatch = useDispatch()


const [inputVal, setInputVal] = useState("")
const todo = useSelector((state)=>state.todo.value)


  return (
    <div className="App">
        <button
        aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(4))}
        >
          Decrement
        </button>
        <hr /><br /><hr /><br /><hr /><br />



        <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo({value:inputVal,id:uuidv4()}))}>add</button>
        <div>
          {
            todo.map((x)=>(<li key={uuidv4()}>{x.value}</li>))
          }
        </div>
        <hr /><br /><hr /><br /><hr /><br />
        <Calculator></Calculator>

    </div>
    
  );
}

export default App;
