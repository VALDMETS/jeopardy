import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Board from './board';
import Clue from './clue';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={Board}>
      <Route path=":id" component={Clue}/>
    </Route>
  </Router>
);

export default router;
