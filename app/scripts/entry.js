import React from 'react';
import ReactDOM from 'react-dom';

import router from './components/router';
import Alert from './components/alert';
import store from './store';

store.alert.set('BARKLAR\'S TURN TO PICK');
ReactDOM.render(<Alert/>, document.getElementById('top'));
ReactDOM.render(router, document.getElementById('container'));
