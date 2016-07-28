import React from 'react';
import store from '../store';

const Input = React.createClass({
  getInitialState: function(){
    return {
      counter: window.setTimeout(this.countdown,8000)
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
    console.log(document.getElementById('answerfield').value);
  },
  countdown: function() {
    console.log('input countdown finished :)');
  }
});

export default Input;
