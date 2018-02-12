import React, { Component } from 'react';
import Voting from './Voting';
import Results from './Results';
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import io from 'socket.io-client';

const store = createStore(reducer);
const socket = io(`${window.location.protocol}//${window.location.hostname}:8090`);

socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
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
