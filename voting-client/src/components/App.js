import React, { Component } from 'react';
import Voting from './Voting';
import Results from './Results';
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import io from 'socket.io-client';

const socket = io(`${window.location.protocol}//${window.location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);


socket.on('state', state =>
  store.dispatch(setState(state))
);

class App extends Component {
    
    render() {

        return(
          <Provider store={store}>
            <HashRouter>
              <Switch>  
                <Route exact path="/" 
                  component={Voting}
                />
                <Route path="/results"
                  component={Results}
              />
              </Switch>  
            </HashRouter>
          </Provider>  
        )
    }
}

export default App;
