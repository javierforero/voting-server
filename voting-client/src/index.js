import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Voting from './Voting';
import registerServiceWorker from './registerServiceWorker';

const pair = ['Trainspotting', '28 Days Later'];
let votedWidth;
const vote = (entry) => {
    votedWidth = entry;
    console.log('voted for: ', entry);
}

ReactDOM.render(<Voting
                 pair={pair}
                 vote={vote} 
                />, document.getElementById('root'));
registerServiceWorker();
