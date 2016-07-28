import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Popup = React.createClass({
  getInitialState: function(){
    return {
      counter: window.setTimeout(this.countdown,5000)
    }
  },
  render: function(){
    document.addEventListener('keyup', this.keyHandler);
    return (
      <div className="overlay">
        <div className="questionwindow">
          <h5>For {store.currentQuestion.storedValue}</h5>
          <div className="questionbox">
            {store.currentQuestion.question}
          </div>
          {this.props.children}
        </div>
      </div>
    )
  },
  keyHandler: function(e) {
    window.clearTimeout(this.state.counter);
    if (e.which===65 || e.which === 71 || e.which === 76) {
      if(e.which===65) {store.currentPlayer = 0} else if
      (e.which===71) {store.currentPlayer = 1} else if
      (e.which===76) {store.currentPlayer = 2}
      console.log(store.currentPlayer);
      hashHistory.push('/main/question/input');
      document.removeEventListener('keyup', this.keyHandler);

    }
    // hashHistory.push('/main');
  },
  countdown: function() {
    console.log('counted down on answer time!');
  }
});

export default Popup;
