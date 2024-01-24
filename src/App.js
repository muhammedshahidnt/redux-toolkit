import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './components/todo';
import Counter from './components/counter';
import Form from './components/form';

function App() {
  const [number, setnumber] = useState('')

  const dispatch = useDispatch()
  



  const btn = (value) => {
    setnumber((item) => item + value)

  }
  const result = () => {
    setnumber(eval(number))
  }
  const clear = () => {
    setnumber('')
  }
  return (
    <div className="App">
      <Counter />
      


      <Form />
      <Todo />
      <div>
        <input type="text" value={number} />
        <div>
          <button onClick={() => btn('7')}>7</button>
          <button onClick={() => btn('8')}>8</button>
          <button onClick={() => btn('9')}>9</button>
          <button onClick={() => btn('/')}>/</button>
        </div>
        <div>
          <button onClick={() => btn('4')}>4</button>
          <button onClick={() => btn('5')}>5</button>
          <button onClick={() => btn('6')}>6</button>
          <button onClick={() => btn('*')}>*</button>
        </div>
        <div>
          <button onClick={() => btn('1')}>1</button>
          <button onClick={() => btn('2')}>2</button>
          <button onClick={() => btn('3')}>3</button>
          <button onClick={() => btn('-')}>-</button>
        </div>
        <button onClick={() => btn('+')}>+</button>
        <button onClick={() => result()}>=</button>
        <button onClick={() => clear()}>clear</button>
      </div>
    </div>

  );
}


export default App;
