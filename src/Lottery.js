import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotteryBalls: Array.from({ length: this.props.numBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  generateLottery() {
    this.setState((currState) => ({
      lotteryBalls: currState.lotteryBalls.map(
        (ball) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generateLottery();
  }
  render() {
    return (
      <div className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.lotteryBalls.map((ballNum) => (
            <Ball num={ballNum} />
          ))}
        </div>
        <br />
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
