import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Board from './board';
import Popup from './popup';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={Board}>
      <Route path="/main/question" component={Popup}/>
    </Route>
  </Router>
);

export default router;
