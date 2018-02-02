import React, { Component } from 'react';
import './App.css';
import Vote from './Vote';
import Winner from './Winner';

class Voting extends Component {
  
  render() {
    return (
      <div className="App">
        { this.props.winner ?
          <Winner ref="winner" winner={this.props.winner}/> :
          <Vote 
            pair={this.props.pair}
            vote={this.props.vote}
            hasVoted={this.props.hasVoted}
          />
         }
      </div>
    );
  }
}

export default Voting;
