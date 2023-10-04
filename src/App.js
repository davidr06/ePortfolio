import logo from './logo.svg';
import React from 'react';
import './App.css';
import header from './components/header';

const App = () =>{
  return (
    <div>
      <h1>well actually</h1>
      <Test />
      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <div>
      <pre>
        <h6>Testing button</h6>
      </pre>
    </div>
  );
}

function Test() {
  return (
    <div>
      <h2>I am seeing how this works</h2>
    </div>
  )
}

export default App;