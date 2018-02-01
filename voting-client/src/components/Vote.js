import React, { Component } from 'react';

class Vote extends Component {

    getPair() {
        return this.props.pair || [];
      }
    
      isDisabled() {
        return !!this.props.hasVoted;
      }
    
      hasVotedFor(entry) {
        return this.props.hasVoted === entry;
      }

      render() {
        return(
          <div className="vote">
            {
              this.getPair().map((entry) => {
                return(
                  <button key={entry}
                     disabled={this.isDisabled()}
                     onClick={() => this.props.vote(entry)}
                     className="btn btn-primary btn-lg">
                    {entry}
                    {this.hasVotedFor(entry) ?
                      <div className="label">Voted</div> :
                      null
                    }
                  </button>
                )
              })
            }
          </div>
        );
      }
}

export default Vote;