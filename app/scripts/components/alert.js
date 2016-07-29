import React from 'react';
import store from '../store';

const Alert = React.createClass({
  getInitialState: function() {
    return {
      message: store.alert.message
    }
  },
  render: function() {
    return (
      <header className="alertbar">
        <div>
          {this.state.message}
        </div>
      </header>
    )
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
