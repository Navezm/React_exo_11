import React, {Component} from 'react';
import './app.css';

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  changeClass = () => {
    let span = document.querySelector("span");
    span.classList.toggle("text-red");
  };

  render(){
    return (
      <div className="App">
        <span>{this.state.count}</span> <br/> <br/>
        <button onClick={this.increment}>Click +1</button> <button onClick={this.decrement}>Click -1</button> <button onClick={this.changeClass}>Change text red</button>
      </div>
    );
  };
};

export default App;