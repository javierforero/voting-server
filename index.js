import makeStore from './src/store';
import startServer from './src/server';
import {List} from 'immutable';
export const store = makeStore();
startServer(store);

store.dispatch({
    type: 'SET_ENTRIES',
    entries: List.of(
        "Shallow Grave",
        "Trainspotting",
        "A Life Less Ordinary",
        "The Beach",
        "28 Days Later",
        "Millions",
        "Sunshine",
        "Slumdog Millionaire",
        "127 Hours",
        "Trance",
        "Steve Jobs"
    )
});

store.dispatch({type: 'NEXT'});