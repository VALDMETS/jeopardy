import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Start = React.createClass({
  render: function() {
    return (
      <div className="startscreen">
        <h2>CLEVERLY</h2>
        <p>THE HIT NEW COPYRIGHT NON-INFRINGING GAME SHOW APP</p>
        <form onSubmit={this.submitFunction}>
          <h4>WHAT ARE YOUR NAMES?</h4>
          <input type="text" id="player1" placeholder="PLAYER 1 NAME"/>
          <input type="text" id="player2" placeholder="PLAYER 2 NAME"/>
          <input type="text" id="player3" placeholder="PLAYER 3 NAME"/>
          <input type="submit" value="START CLEVERLY"/>
        </form>
      </div>
    )
  },
  submitFunction: function(e) {
    e.preventDefault();
    for (var i = 0; i < 3; i++) {
      store.playerList[i].name = document.getElementById('player' + (i+1)).value.toUpperCase();
    }
    hashHistory.push('/main');
  }
});
export default Start;
