import Bb from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../components/alert';
import store from '../store';

const AlertModel = Bb.Model.extend({
  defaults: {
    message: 'test'
  },
  set: function(msg) {
    this.message = msg;
    this.trigger('update');
  },
  clearout: function(msg, time) {
    this.message = msg;
    this.trigger('update');
    setTimeout(() => {
      this.message = '';
      this.trigger('update');
    }, time);
  }
});

export default AlertModel;
