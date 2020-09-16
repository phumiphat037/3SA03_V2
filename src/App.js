import React from 'react';
import WordCard from './WordCard';
import logo from './spaceship.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <WordCard value="hello"/>
        </div>
        <img src={logo} className="App-logo"/>
        <p>
          Phumiphat Mathon 6135512037
        </p>
      </header>
    </div>
  );
}
export default App;