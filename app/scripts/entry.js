import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import router from './components/router';
import Alert from './components/alert';
import store from './store';


store.alert.set('');
hashHistory.push('/start');

ReactDOM.render(<Alert/>, document.getElementById('top'));
ReactDOM.render(router, document.getElementById('container'));
