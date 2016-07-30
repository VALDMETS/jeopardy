import React from 'react';
import store from '../store';
import boardData from '../data/boarddata';

const Alert = React.createClass({
  getInitialState: function() {
    return {
      message: store.alert.message
    }
  },
  render: function() {
    if (boardData.get('questionList').length === 6) {
      return (
        <header className="alertbar">
          <div>
            {this.state.message}
          </div>
        </header>
      )
    } else {
      return null;
    }
  },
  componentDidMount: function() {
    store.alert.on('update', () => {
      this.setState({
        message: store.alert.message
      });
    });
  }
});

export default Alert;
