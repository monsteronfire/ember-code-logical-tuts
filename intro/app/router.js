import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('first', { path: 'first' });
  this.route('databinding', { path: 'databinding' });
  this.route('firstModel', { path: 'firstModel' });
  this.route('secondModel', { path: 'secondModel' });
});

export default Router;
