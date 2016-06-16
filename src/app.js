import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import { addDeck, showAddDeck, hideAddDeck } from './actions'
import * as reducers from './reducers';

const store = createStore(combineReducers(reducers));

import App from './components/App';
import Sidebar from './components/Sidebar';

function run() {
  let state = store.getState();
  console.log(state);
  ReactDOM.render(
    <App>
      <Sidebar
        decks={ state.decks }
        addingDeck={ state.addingDeck }
        addDeck={name => store.dispatch(addDeck(name))}
        showAddDeck={() => store.dispatch(showAddDeck())}
        hideAddDeck={() => store.dispatch(hideAddDeck())}
        />
    </App>,
    document.querySelector('#root')
  );
}
run();
store.subscribe(run);
