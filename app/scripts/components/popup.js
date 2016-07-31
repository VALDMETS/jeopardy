import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Popup = React.createClass({
  getInitialState: function(){
    return {
      counter: window.setTimeout(this.countdown,12000),
      sound: window.setTimeout(this.soundcount,7000)
    }
  },
  render: function(){
    document.addEventListener('keyup', this.keyHandler);
    return (
      <div className="overlay">
        <div className="questionwindow">
          <div id="countdownbar">
            <div id="countdownmove">
            </div>
          </div>
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
  componentDidMount: function() {
    store.countdown2.bar = '';
    store.countdown2.width = 0;
    store.countdown.bar = document.getElementById("countdownmove");
    store.countdown.width = 100;
    let id = setInterval(frame, 12);
    function frame() {
        if (store.countdown.width <= 0) {
            clearInterval(id);
            store.countdown.width = 100;
        } else {
            store.countdown.width -= .1;
            store.countdown.bar.style.width = store.countdown.width + '%';
        }
    }
  },
  keyHandler: function(e) {
    window.clearTimeout(this.state.counter);
    window.clearTimeout(this.state.sound);
    store.sfx_countdown.pause();
    store.sfx_countdown.currentTime = 0;
    store.sfx_buzzin.play();
    if (e.which===65 || e.which === 71 || e.which === 76) {
      if(e.which===65) {store.currentPlayer = 0} else if
      (e.which===71) {store.currentPlayer = 1} else if
      (e.which===76) {store.currentPlayer = 2}

      hashHistory.push('/main/question/input');
      document.removeEventListener('keyup', this.keyHandler);
    }
  },
  countdown: function() {
    console.log('counted down on answer time!');
    hashHistory.push('/main');
    store.sfx_wrong.play();
    store.alert.set('OUT OF TIME!');
    setTimeout(function(){
      store.alert.set('ANSWER: ' + store.currentQuestion.answer);
    },2000);
    setTimeout(function(){
      store.alert.set(store.playerList[store.currentSelector].name + '\'S TURN TO PICK');
    },4000);
  },
  soundcount: function() {
    store.sfx_countdown.play();
  }
});

export default Popup;
