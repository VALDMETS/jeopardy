import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Popup = React.createClass({
  getInitialState: function(){
    return {
      counter: window.setTimeout(this.countdown,12000)
    }
  },
  render: function(){
    document.addEventListener('keyup', this.keyHandler);
    return (
      <div className="overlay">
        <div className="questionwindow">
          <h5>{store.currentQuestion.storedValue}</h5>
          <div className="questionbox">
            {store.currentQuestion.question}
          </div>
          {this.props.children}
          <div className="buzzerbox">
            <div>
              <h5>{store.playerList[0].name}</h5>
              <p>"A" TO ANSWER!</p>
            </div>
            <div>
              <h5>{store.playerList[1].name}</h5>
              <p>"G" TO ANSWER!</p>
            </div>
            <div>
              <h5>{store.playerList[2].name}</h5>
              <p>"L" TO ANSWER!</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  keyHandler: function(e) {
    window.clearTimeout(this.state.counter);
    console.log(store.currentQuestion);
    if (e.which===65 || e.which === 71 || e.which === 76) {
      if(e.which===65) {store.currentPlayer = 0} else if
      (e.which===71) {store.currentPlayer = 1} else if
      (e.which===76) {store.currentPlayer = 2}
      console.log(store.currentPlayer);
      hashHistory.push('/main/question/input');
      document.removeEventListener('keyup', this.keyHandler);
    }
  },
  countdown: function() {
    console.log('counted down on answer time!');
    hashHistory.push('/main');
    store.alert.set('OUT OF TIME!');
    setTimeout(function(){
      store.alert.set('ANSWER: ' + store.currentQuestion.answer);
    },2000);
    setTimeout(function(){
      store.alert.set('BARKLAR\'S TURN TO PICK');
    },4000);
  }
});

export default Popup;
