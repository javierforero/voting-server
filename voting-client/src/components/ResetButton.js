import React, {Component} from 'react';

class ResetButton extends Component {
  render() {
      return (
        <button ref="restart"
        onClick={this.props.restart}
       >Restart</button>
      );
  }
}

export default ResetButton;