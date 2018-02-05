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

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});

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
