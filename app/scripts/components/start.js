import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Start = React.createClass({
  render: function() {
    return (
      <div className="startscreen">
        <h2>CYBER JEOPARDY</h2>
        <p>THE HIT NEW COPYRIGHT NON-INFRINGING GAME SHOW APP</p>
        <form onSubmit={this.submitFunction}>
          <h4>WHAT ARE YOUR NAMES?</h4>
          <input type="text" id="player1" placeholder="PLAYER 1 NAME"/>
          <span>You will use "A" to buzz in!</span>
          <input type="text" id="player2" placeholder="PLAYER 2 NAME"/>
          <span>You will use "G" to buzz in!</span>
          <input type="text" id="player3" placeholder="PLAYER 3 NAME"/>
          <span>You will use "L" to buzz in!</span>
          <input type="submit" id="startsubmit" value="CYBER JEOPARDIZE"/>
        </form>
      </div>
    )
  },
  submitFunction: function(e) {
    e.preventDefault();
    for (var i = 0; i < 3; i++) {
      store.playerList[i].name = document.getElementById('player' + (i+1)).value.toUpperCase();
      if (!store.playerList[i].name) {
        store.playerList[i].name = store.randomName[Math.floor(Math.random()*8)];
      }
    }
    store.sfx_intro.play();
    hashHistory.push('/main');
  }
});
export default Start;
