import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class CardModal extends React.Component {
  componentDidUpdate() {
    this.refs.front.focus();
  }
  render() {
    let { card, onDelete } = this.props;
    return (
      <div className='modal'>
        <h1> { onDelete ? 'Edit' : 'New' } Card </h1>
        <label> Card Front: </label>
        <textarea ref='front' defaultValue={card.front}></textarea>
        <label> Card Back: </label>
        <textarea ref='back' defaultValue={card.back}></textarea>
        <p>
          <button onClick={this.onSave.bind(this)}> Save Card </button>

          <Link className='btn' to={`/deck/${card.deckId}`}> Cancel </Link>
          {
            onDelete ?
              <button onClick={this.onDelete.bind(this)} className='delete'>
                Delete Card
              </button>
            :
              null
          }
        </p>
      </div>
    );
  }
  onSave(evt) {
    var front = this.refs.front;
    var back = this.refs.back;

    this.props.onSave(
      Object.assign({}, this.props.card, {
        front: front.value,
        back: back.value
      })
    );

    browserHistory.push(`/deck/${this.props.card.deckId}`);
  }
  onDelete(evt) {
    this.props.onDelete(this.props.card.id);
    browserHistory.push(`/deck/${this.props.card.deckId}`);
  }
}
