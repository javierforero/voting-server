import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Voting from './Voting';
import Results from './components/Results';
import {
    Route,
    HashRouter
} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const pair = ['Trainspotting', '28 Days Later'];
const routes =
  <div>
    <Route exact path="/" component={Voting}/>
    <Route path="/results" component={Results}/>
  </div>;

ReactDOM.render(<HashRouter>
                  {routes}   
                </HashRouter>,
                document.getElementById('root'));
registerServiceWorker();
