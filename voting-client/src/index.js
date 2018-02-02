import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Voting from './Voting';
import Results from './components/Results';
import {
    Route,
    HashRouter
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const routes =
  <App>
    <Route exact path="/" component={Voting}/>
    <Route path="/results" component={Results}/>
  </App>;

ReactDOM.render(<HashRouter>
                  {routes}
                </HashRouter>,
                document.getElementById('root'));
registerServiceWorker();
