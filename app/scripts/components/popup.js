import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Popup = React.createClass({
  render: function(){
    document.addEventListener('keyup', this.clickHandler);
    return (
      <div className="overlay">
        <div className="questionwindow">
          <h5>For {store.currentQuestion.storedValue}</h5>
          <div className="questionbox">
            {store.currentQuestion.question}
          </div>
        </div>
      </div>
    )
  },
  clickHandler: function() {
    console.log('wow');
    hashHistory.push('/main');
    document.removeEventListener('keyup', this.clickHandler);
  }
});

export default Popup;
