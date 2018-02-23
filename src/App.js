import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
      countBy: 1,
    }
  }
  render() {
    const { counterValue, countBy } = this.state;
    const incrementCounter = () => {
      const newValue = counterValue + countBy;
      this.setState({counterValue: newValue});
    }
    const decrementCounter = () => {
      const newValue = counterValue - countBy;
      this.setState({counterValue: newValue});
    }
    const incrementCountBy = () => {
      const newValue = countBy + 1;
      this.setState({countBy: newValue});
      resetCounter();
    }
    const decrementCountBy = () => {
      if(countBy > 1) {
        const newValue = countBy - 1;
        this.setState({countBy: newValue});
        resetCounter();
      } else {
        alert("You can't decrement below 1 and still count by.");
      }
    }
    const resetCounter = () => {
      this.setState({counterValue: 0});
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">React Counter</h1>
        </div>
        <div className="App-intro">
          <h3>Count by
            <span>&nbsp;</span>
            <span><button onClick={decrementCountBy}>-</button></span>
            <span>&nbsp;</span>
            <span>{countBy}</span>
            <span>&nbsp;</span>
            <span><button onClick={incrementCountBy}>+</button></span>
            <span>:</span>
          </h3>
        </div>
        <div>
          <button onClick={incrementCounter}>+</button>
          <h3>{counterValue}</h3>
          <button onClick={decrementCounter}>-</button>
        </div>
        <button onClick={resetCounter}>Reset Counter</button>
      </div>
    );
  }
}

export default App;
