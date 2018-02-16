import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';
import ResetButton from './ResetButton'
import * as actionCreators from './action_creators';

class Voting extends Component {
  
  render() {
    return (
      <div className="App">
        { this.props.winner ?
          <Winner ref="winner" winner={this.props.winner}
                               restart={this.props.restart}
          /> :
          <Vote 
            pair={this.props.pair}
            vote={this.props.vote}
            hasVoted={this.props.hasVoted}
          />
         }
         <ResetButton restart={this.props.restart}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export default connect(
                 mapStateToProps,
                 actionCreators
               )(Voting);
