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

    // Answer Checking Stuff - Clears gunk out from the API and is a little less oppressive than a total match.

    let currentTry = document.getElementById('answerfield').value.toUpperCase();
    let currentCorrectArray = store.currentQuestion.answer.replace('<I>','').replace('</I>','').replace('(','').replace(')','');
    currentCorrectArray = currentCorrectArray.split(' ');
    currentCorrectArray = currentCorrectArray.filter(function(word){
      if (word.length < 4) {
        return false;
      } else { return true; }
    });
    currentCorrectArray = currentCorrectArray.filter(function(word){
      if (currentTry.search(word)!=-1) { return true; } else {return false}
    });
    if (currentCorrectArray.length) {
      store.playerList[store.currentPlayer].money += Number(store.currentQuestion.storedValue.slice(1));
    } else {
      store.playerList[store.currentPlayer].money -= Number(store.currentQuestion.storedValue.slice(1));
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
