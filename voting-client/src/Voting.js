import React, { Component } from 'react';
import './App.css';

class Voting extends Component {
  
  getPair() {
    return this.props.pair || [];
  }
  
  render() {
    return (
      <div className="App">
        {
          this.getPair().map((entry) => {
            return(
             <button key={entry}
                     onClick={() => this.props.vote(entry)}
                     className="btn btn-primary btn-lg">
               {entry}
             </button>
            )
        })
        }
      </div>
    );
  }
}

export default Voting;
