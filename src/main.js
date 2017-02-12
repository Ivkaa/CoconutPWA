// require('bootstrap/dist/css/bootstrap.min.css');
import Vue from 'vue'
import App from './App.vue'
require('bootstrap/dist/js/bootstrap.min.js');

new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  render: h => h(App),

})
