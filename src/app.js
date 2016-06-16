
const cards = (state, action) => {
  switch(action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });
      return state.concat([newCard]);

    default:
      return state || [];
  }
};

const store = Redux.createStore(Redux.combineReducers({
  cards
}));

const App = (props) => {

  return (
    <div className='app'>
      { props.children }
    </div>
  );
};

class Sidebar extends React.Component {

  render() {
    let props = this.props;
    return (
      <div className='sidebar'>
        <h2>All Decks</h2>

        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}> { deck.name } </li>
          )}
        </ul>
        { props.addingDeck && <input ref='add' /> }
      </div>
    )
  }
}

ReactDOM.render(
  <App>
    <Sidebar decks={[{name: 'Deck 1'}]} addingDeck={true} />
  </App>,
  document.querySelector('#root')
);
