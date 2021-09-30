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
      <header className="App-header">
          <div>
            <h3>{counter}</h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
          </div>
      </header>
    </div>
  );
}

export default App;
