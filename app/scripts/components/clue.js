import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import boardData from '../data/boarddata';
import store from '../store';

const Clue = React.createClass({
  render: function() {
    return (
        <div className="clue" id={this.props.data.id} onClick={this.clickFunction}>
          {this.props.data.value}
        </div>
    )
  },
  clickFunction: function(e) {
    store.currentQuestion = this.props.data;
    store.currentQuestion.storedValue = this.props.data.value;
    this.props.data.value = '';
    
    let temp = document.getElementById(this.props.data.id);
    temp.className = ' clickblocked';
    // ReactDOM.unmountComponentAtNode(document.getElementById(this.props.data.id));
    hashHistory.push('/main/question');
  }
});

export default Clue;
