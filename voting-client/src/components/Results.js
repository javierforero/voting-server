import React, {Component} from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import ResetButton from './ResetButton';
import * as actionCreators from './action_creators';

class Results extends Component {

    getPair() {
        return this.props.pair || [];
    }

    getVotes(entry) {
      
      if(this.props.tally && this.props.tally.has(entry)) {
          return this.props.tally.get(entry);
      }

      return 0;
    }
    
    render() {
        return (
            this.props.winner ? 
            <Winner ref="winner" restart={this.props.restart} 
                                 winner={this.props.winner} /> :
            <div className="results">
              <div className="tally">
                {this.getPair().map(entry => 
                  <div key={entry} className="entry">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                      {this.getVotes(entry)}
                    </div>
                  </div>
                )}
              </div>
              <div className="management">
                <ResetButton restart={this.props.restart}/>
                <button ref="next"
                        className="next"
                        onClick={this.props.next}>
                  Next
                </button>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  console.log('i ran in results: ', state.get('hasVoted'));
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote','tally']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(Results);