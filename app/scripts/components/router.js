import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Start from './start';
import Board from './board';
import Popup from './popup';
import Input from './input';

const router = (
  <Router history={hashHistory}>
    <Route path="/start" component={Start}/>
    <Route path="/main" component={Board}>
      <Route path="question" component={Popup}>
        <Route path="input" component={Input}/>
      </Route>
    </Route>
  </Router>
);

export default router;
