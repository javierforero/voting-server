import React, { Component } from 'react';
import ResetButton from './ResetButton';

class Winner extends Component {

    render() {
        return (
            <div className="winner">
              <h1>Winner is {this.props.winner}!</h1>
              <ResetButton restart={this.props.restart} />
            </div>
        );
    }
}

export default Winner;