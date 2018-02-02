import React, { Component } from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

class App extends Component {

    render() {
        const childrenWithProps = this.props.children.map((child) => {
            return React.cloneElement(child, {
                pair: pair,
                tally: tally
            });
           });

           console.log("these are props: ", childrenWithProps);

        return <div>{childrenWithProps}</div>
    }
}

export default App;
