import React from 'react';

import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import { Link } from 'react-router';

const mapStateToProps = ({ decks, addingDeck }) => ({ decks, addingDeck });

const mapDispatchToProps = dispatch => ({
  addDeck: (name) => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
})

class Sidebar extends React.Component {
  componentDidUpdate() {
    var el = this.refs.add;
    if(el) el.focus();
  }
  render() {
    let props = this.props;
    return (
      <div className='sidebar'>
        <h2>All Decks</h2>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>
              <Link to={`/deck/${deck.id}`}> { deck.name } </Link>
            </li>
          )}
        </ul>
        { props.addingDeck &&
          <input ref='add' onKeyPress={this.createDeck.bind(this)} /> }
      </div>
    )
  }
  createDeck(evt) {
    if(evt.which !== 13) return;
    var name = this.refs.add.value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
