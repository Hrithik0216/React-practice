import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   console.log("count is increased")
  // },[count])
  const update = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    console.log(`Clicked ${updatedCount} times`);
  }
  const incrementCallback = useCallback(() => {
    setCount(c => c + 1)
    console.log("re-rendered")
    console.log({ count })
  }, [count])

  
  let c = useRef(0)
  const handler = () => {
    let updatedCount = c.current + 1
    c.current = updatedCount
    console.log(c.current)
  }
  return (
    <div className="App">
      <button type="submit" onClick={update}>+</button>
      <button type="submit" onClick={incrementCallback}>+ call</button>
      <button type="submit" onClick={handler}>useRef</button>
      {count}
    </div>
  );
}

export default App;
