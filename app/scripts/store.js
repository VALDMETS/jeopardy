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
  endOfGame: 0,
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
  randomName: ['MYSTERIO','BLANK FRANK', 'MISSING SANDY', 'ABSENT MADISON', 'LAZY DAISY', 'INVISIBLE TODD', 'PASSIVE PAULA', 'QUIET QUENTIN'],
  sfx_buzz: new Audio('assets/sounds/chime.wav'),
  sfx_buzzin: new Audio('assets/sounds/buzzin.wav'),
  sfx_right: new Audio('assets/sounds/synthright.wav'),
  sfx_wrong: new Audio('assets/sounds/wrong.wav'),
  sfx_countdown: new Audio('assets/sounds/ticktock.wav'),
  sfx_intro: new Audio('assets/sounds/intro.wav')
};

export default store;
