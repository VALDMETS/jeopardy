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
        <input type="text" id="answerfield" placeholder={store.playerList[store.currentPlayer].name + "\'S ANSWER"}/>
        <input type="submit" value="SUBMIT"/>
      </form>
    )
  },
  componentDidMount: function() {
    document.getElementById('answerfield').focus();
    store.countdown.bar = '';
    store.countdown.width = 0;
    store.countdown2.bar = document.getElementById("countdownmove");
    store.countdown2.width = 100;
    let id = setInterval(frame, 12);
    function frame() {
        if (store.countdown2.width <= 0) {
            clearInterval(id);
            store.countdown2.width = 100;
        } else {
            store.countdown2.width -= .1;
            store.countdown2.bar.style.width = store.countdown2.width + '%';
        }
    }
  },
  submitFunction: function(e) {
    e.preventDefault();
    window.clearTimeout(this.state.counter);

    // Answer Checking Stuff - Clears gunk out from the API and is a little less oppressive than a total match.

    let currentTry = document.getElementById('answerfield').value.toUpperCase();
    store.currentQuestion.answer = store.currentQuestion.answer.replace('<I>','').replace('</I>','').replace('(','').replace(')','').replace('\\','');
    let currentCorrectArray = store.currentQuestion.answer.split(' ');
    currentCorrectArray = currentCorrectArray.filter(function(word){
      if (word.length < 3) {
        return false;
      } else { return true; }
    });
    currentCorrectArray = currentCorrectArray.filter(function(word){
      if (currentTry.search(word)!=-1) { return true; } else {return false}
    });
    if (currentCorrectArray.length) {
      store.playerList[store.currentPlayer].money += Number(store.currentQuestion.storedValue.slice(1));
      store.alert.set('CORRECT!');
      setTimeout(function(){
        store.alert.set('ANSWER: ' + store.currentQuestion.answer);
      },2000);
      setTimeout(function(){
        store.currentSelector = store.currentPlayer;
        store.alert.set(store.playerList[store.currentSelector].name + '\'S TURN TO PICK');
      },4000);
    } else {
      store.playerList[store.currentPlayer].money -= Number(store.currentQuestion.storedValue.slice(1));
      store.alert.set('INCORRECT!');
      setTimeout(function(){
        store.alert.set('ANSWER: ' + store.currentQuestion.answer);
      },2000);
      setTimeout(function(){
        store.alert.set(store.playerList[store.currentSelector].name + '\'S TURN TO PICK');
      },4000);
    }

    hashHistory.push('/main');
  },
  countdown: function() {
    store.playerList[store.currentPlayer].money -= Number(store.currentQuestion.storedValue.slice(1));
    hashHistory.push('/main');
    store.alert.set('OUT OF TIME!');
    setTimeout(function(){
      store.alert.set('ANSWER: ' + store.currentQuestion.answer);
    },2000);
    setTimeout(function(){
      // if (location.hash==='/main*') {
        store.alert.set(store.playerList[store.currentSelector].name + '\'S TURN TO PICK');
      // }

    },4000);

  }
});

export default Input;
