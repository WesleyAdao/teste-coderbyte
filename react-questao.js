

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CountDisplay = (props) => {
  return <p>{ props.currentCount }</p>;
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentCount: 0};
  }

  handleIncrement(event) {
    this.setState({currentCount: this.state.currentCount + 1});
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <CountDisplay 
        currentCount={this.state.currentCount}
      /></p>
        <button id="mainButton" onClick={this.handleIncrement.bind(this)}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);