import React from 'react';
import store from '../store';

const Finish = React.createClass({
  render: function() {
    document.getElementById('top').className = 'hidden';
    let winner = store.playerList[0];
    if (store.playerList[1].money > store.playerList[0].money && store.playerList[1].money > store.playerList[2].money) {
      winner = store.playerList[1];
    } else if (store.playerList[2].money > store.playerList[0].money && store.playerList[2].money > store.playerList[1].money) {
      winner = store.playerList[2];
    }
    return (
      <div id="winnerscreen">
        <h1>{winner.name}</h1>
        <h4>WINS WITH ${winner.money}!</h4>
        <h4>THANKS FOR PLAYING CYBER JEOPARDY</h4>
      </div>
    )
  }
});

export default Finish;
