import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './utils/Slice';
import Footer from './components/Footer';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <>
        Count: {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </>
      <Footer />
    </div>
  );
}

export default App;
