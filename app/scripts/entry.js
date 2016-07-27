import React from 'react';
import ReactDOM from 'react-dom';

import router from './components/router';
import store from './store';
import questionPull from './data/questionpull';

ReactDOM.render(router, document.getElementById('container'));

console.log(store.questionBank);
