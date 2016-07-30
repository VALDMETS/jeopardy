import AlertModel from './data/alertmodel';

let store = {
  alert: new AlertModel(),
  countdown: {
    bar: '',
    width: 100
  },
  countdown2: {
    bar: '',
    width: 100
  },
  //This is a default that no player is currently answering. Players are zero indexed.
  currentPlayer: -1,
  currentQuestion: {
    id: '',
    answer: '',
    question: '',
    value: '',
    storedValue: ''
  },
  playerList: [{
    name: '',
    money: 0
  }, {
    name: '',
    money: 0
  }, {
    name: '',
    money: 0
  }],
  currentSelector: -1,
  sfx_buzz: new Audio('http://www.wavsource.com/snds_2016-07-24_1073029414890864/sfx/buzzer_x.wav'),
};

export default store;
