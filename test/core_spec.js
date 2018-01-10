import { List, Map } from 'immutable';
import { expect } from 'chai';
import { setEntries, next, vote } from '../src/core';

describe('application logic', () =>{

  describe('setEntries', () => {
      it('adds the entries to the state', () => {
          const state = Map();
          const entries = List.of('Trainspotting', '28 days later');
          const nextState = setEntries(state, entries);

          expect(nextState).to.equal(Map({
              entries: List.of('Trainspotting', '28 days later')
          }));
      });
  });

  describe('next function cues up pair', () => {

    it('it takes first two entries under vote', () => {

      const state = Map({
          entries: List.of('Trainspotting', '28 days later', 'Sunshine')
      });
      const  nextState = next(state);
      expect(nextState).to.equal(Map({
          vote: Map({
            pair: List.of('Trainspotting','28 days later')
          }),
          entries: List.of('Sunshine')
      }));
    });

  });

  describe('vote', () => {
      it('creates tally when voted', () => {
          const state = Map({
              vote: Map({
                  pair: List.of('Trainspotting','28 days later')
              }),
              entries: List()
          });
          const nextState = vote(state, 'Trainspotting');

          expect(nextState).to.equal(Map({
              vote: Map({
                  pair: List.of('Trainspotting','28 days later'),
                  tally: Map({
                    'Trainspotting': 1
                  })
                }),
                entries: List()
          }));
      });

      it('adds a tally to existing', () => {
          const state = Map({
              vote: Map({
                  pair: List.of('Trainspotting','28 days later'),
                  tally: Map({
                      'Trainspotting': 1,
                       '28 days later': 5
                  })
              }),
              entries: List()
          });

          const nextState = vote(state, 'Trainspotting');

          expect(nextState).to.equal(Map({
            vote: Map({
                pair: List.of('Trainspotting','28 days later'),
                tally: Map({
                    'Trainspotting': 2,
                     '28 days later': 5
                })
            }),
            entries: List()
        }));
      });
  });
});