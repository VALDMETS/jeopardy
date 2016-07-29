import React from 'react';
import ReactDOM from 'react-dom';

import router from './components/router';
import Alert from './components/alert';
import store from './store';

store.alert.set('Barklar\'s Turn To Pick!');
ReactDOM.render(<Alert/>, document.getElementById('top'));
ReactDOM.render(router, document.getElementById('container'));
