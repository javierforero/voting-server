import React, {Component} from 'react'

class Results extends Component {

    getPair() {
        return this.props.pair || [];
    }
    
    render() {
        console.log(this.props);
        return (
            <div className="results">
            </div>
        );
    }
}

export default Results;