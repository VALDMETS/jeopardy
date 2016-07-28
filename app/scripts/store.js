

let store = {
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
