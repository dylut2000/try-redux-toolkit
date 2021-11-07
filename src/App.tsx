import React from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, decremented} from './features/counter/counter-slice';
import logo from './logo.svg';
import './App.css';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  }

  const handleDecrement = () => {
    dispatch(decremented());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter: {count}</h1>
        <div>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <button onClick={handleDecrement}>
          Decrement
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
