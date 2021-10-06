import React from 'react';
import logo from './logo.svg';
import './App.css';
import {increaseCount, decreaseCount, defaultCount} from './redux/actions/countActions';
import {useDispatch, useSelector} from 'react-redux';
import {State} from './redux/store'

const App = () => {

  const dispatch = useDispatch();

  const count = useSelector((state:State) => state.count)
  return (
    <div className="App">
        <h1>{count}</h1>
        <div>
          <button onClick={() => dispatch(increaseCount(40))}>Increase</button>
          <button onClick={() => dispatch(decreaseCount(40))}>Decrease</button>
          <button onClick={() => dispatch(defaultCount())}>Default</button>
        </div>
    </div>
  );
}

export default App;
