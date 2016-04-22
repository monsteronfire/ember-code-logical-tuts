import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('first', { path: 'first' });
  this.route('databinding', { path: 'databinding' });
});

export default Router;
