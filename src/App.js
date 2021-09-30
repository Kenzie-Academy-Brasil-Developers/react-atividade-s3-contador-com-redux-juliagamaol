import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add,sub } from './store/modules/counter/actions';
function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  const handleAdd = () => dispatch(add(1))
  const handleSub = () => dispatch(sub(1))
  return (
    <div className="App">
      <span>{counter}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
}

export default App;
