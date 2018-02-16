import {setEntries, next, vote, INITIAL_STATE, restart} from './core';
import { List, Map } from 'immutable';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'NEXT':
    return next(state);
  case 'RESTART':     
    return restart(state);      
  case 'VOTE':
    return state.update('vote',
                        voteState => vote(voteState, action.entry));            
  }
  return state;
}