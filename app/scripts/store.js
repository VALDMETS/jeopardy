import AlertModel from './data/alertmodel';

let store = {
  alert: new AlertModel(),
  
  //This is a default that no player is currently answering. Players are zero indexed.
  currentPlayer: -1,
  playerList: [{
    name: 'Barklar',
    money: 0
  }, {
    name: 'Jorsepheen',
    money: 0
  }, {
    name: 'Kramaal',
    money: 0
  }],
  currentQuestion: {
    id: '',
    answer: '',
    question: '',
    value: '',
    storedValue: ''
  }
};

export default store;
