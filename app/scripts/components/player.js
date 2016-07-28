import React from 'react';

const Player = React.createClass({
  render: function() {
    return (
      <div className="playerbox">
        <h3>{this.props.info.name}</h3>
        <h2>${this.props.info.money}</h2>
      </div>
    )
  }
});

export default Player;
