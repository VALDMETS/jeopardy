import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Start = React.createClass({
  render: function() {
    return (
      <div className="startscreen">
        <h2>CLEVERLY</h2>
        <p>WELCOME TO CLEVERLY, THE NEW COPYRIGHT NON-INFRINGING HIT APP. WHAT ARE YOUR NAMES?</p>
        <form onSubmit={this.submitFunction}>
          <input type="text" id="player1" placeholder="PLAYER 1"/>
          <input type="text" id="player2" placeholder="PLAYER 2"/>
          <input type="text" id="player3" placeholder="PLAYER 3"/>
          <input type="submit" value="START CLEVERLY"/>
        </form>
      </div>
    )
  },
  submitFunction: function(e) {
    e.preventDefault();
    for (var i = 0; i < 3; i++) {
      store.playerList[i].name = document.getElementById('player' + (i+1)).value;
    }
    console.log(store.playerList);
    hashHistory.push('/main');
  }
});
export default Start;
