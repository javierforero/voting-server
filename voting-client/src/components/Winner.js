import React, { Component } from 'react';

class Winner extends Component {

    render() {
        return (
            <div className="winner">
              <h1>Winner is {this.props.winner}!</h1>
            </div>
        );
    }
}

export default Winner;