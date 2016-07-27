import React from 'react';
import boardData from '../data/boarddata';

const Clue = React.createClass({
  render: function() {
    return (
      <div className="clue" onClick={this.clickFunction}>
        ${this.props.data.value}
      </div>
    )
  },
  clickFunction: function(e) {
    console.log(this.props.data.question);
  }
});

export default Clue;
