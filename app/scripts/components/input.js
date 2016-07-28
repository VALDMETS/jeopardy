import React from 'react';
import store from '../store';
import { hashHistory } from 'react-router';

const Input = React.createClass({
  getInitialState: function(){
    return {
      counter: window.setTimeout(this.countdown,10000)
    }
  },
  render: function(){
    return (
      <form onSubmit={this.submitFunction}>
        <input type="text" id="answerfield" placeholder={store.playerList[store.currentPlayer].name + "\'s Answer"}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  },
  submitFunction: function(e) {
    e.preventDefault();
    window.clearTimeout(this.state.counter);
    let currentAnswer = document.getElementById('answerfield').value.toUpperCase();
    if (currentAnswer.search(store.currentQuestion.answer)!=-1) {
      store.playerList[store.currentPlayer].money += Number(store.currentQuestion.storedValue.slice(1));
      console.log('correct');
    } else {
      store.playerList[store.currentPlayer].money -= Number(store.currentQuestion.storedValue.slice(1));
      console.log('incorrect');
    }
    hashHistory.push('/main');
  },
  countdown: function() {
    console.log('out of time!');
    store.playerList[store.currentPlayer].money -= Number(store.currentQuestion.storedValue.slice(1));
    hashHistory.push('/main');
  }
});

export default Input;
