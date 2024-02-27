import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // const increment = () =>{
  //   setCount(count+1)
  // }
  // const decrement = () =>{
  //   setCount(count-1)
  // }

  function reducer(state, action) {
    if (action.type == 'increment') {
      return { count: state.count + 1 }
    }
    if (action.type == 'decrement') {
      return { count: state.count - 1 }
    }
  }
  return (
    <div className="App">
      <button type="submit" onClick={() => {
        dispatch({ type: 'increment' })
      }}>+</button>
      {state.count}
      <button type="submit" onClick={() => {
        dispatch({ type: 'decrement' })
      }}>-</button>
    </div>
  );
}

export default App;
