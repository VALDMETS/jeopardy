import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Board from './board';
import Popup from './popup';
import Input from './input';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={Board}>
      <Route path="question" component={Popup}>
        <Route path="input" component={Input}/>
      </Route>
    </Route>
  </Router>
);

export default router;
