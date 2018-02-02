import React, { Component } from 'react';
import {List, Map} from 'immutable';
import Voting from './Voting';
import Results from './Results';
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

class App extends Component {
    
    render() {

        return(
          <HashRouter>
            <Switch>  
              <Route exact path="/" 
                render={() => 
                  <Voting pair={pair}
                          tally={tally}
                  />
                }
              />
              <Route path="/results"
                render={() =>
                  <Results pair={pair}
                           tally={tally}          
                  />
                }
              />
            </Switch>  
          </HashRouter>
        )
    }
}

export default App;
