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

    it('puts the winnner back in entries', ()=> {
        const state = Map({
            vote: Map({
                pair: List.of('Trainspotting', '28 days later'),
                tally: Map({
                    'Trainspotting': 4,
                    '28 days later': 2
                })
            }),
            entries: List.of('Sunshine', 'Millions', '127 Hours')
        });

        const nextState = next(state);

        expect(nextState).to.equal(Map({
            vote: Map({
              pair: List.of('Sunshine', 'Millions')
            }),
            entries: List.of('127 Hours', 'Trainspotting')
        }));
    });

    it('puts both entries back if they are tied', () => {
        const state = Map({
            vote: Map({
                pair: List.of('Trainspotting', '28 days later'),
                tally: Map({
                    'Trainspotting': 3,
                    '28 days later': 3
                })
            }),
            entries: List.of('Sunshine', 'Millions', '127 Hours')
        });

        const nextState = next(state);

        expect(nextState).to.equal(Map({
            vote: Map({
              pair: List.of('Sunshine', 'Millions')
            }),
            entries: List.of('127 Hours', 'Trainspotting', '28 days later')
        }));

    });

    it('returns a winner when theres only one entry left', () => {
      const state = Map({
          vote: Map({
              pair: List.of('Trainspotting', '28 days later'),
              tally: Map({
                'Trainspotting': 4,
                '28 days later': 2
              })
          }),
          entries: List()
      });

      const nextState = next(state);

      expect(nextState).to.equal(Map({
          winner: 'Trainspotting'
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