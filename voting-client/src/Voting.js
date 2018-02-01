import React, { Component } from 'react';
import './App.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './components/Vote';
import Winner from './components/Winner';

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
