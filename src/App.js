import React, {Component} from 'react';
import './app.css';

class App extends Component {
  increment(){
    let span = document.querySelector("span");
    span.innerHTML = Number(span.innerHTML) + 1;
  }

  decrement(){
    let span = document.querySelector("span");
    span.innerHTML = Number(span.innerHTML) - 1;
  }

  changeClass(){
    let span = document.querySelector("span");
    span.classList.toggle("text-red");
  }

  render(){
    return (
      <div className="App">
        <span>0</span> <br/> <br/>
        <button onClick={this.increment}>Click +1</button> <button onClick={this.decrement}>Click -1</button> <button onClick={this.changeClass}>Change text red</button>
      </div>
    );
  };
};

export default App;