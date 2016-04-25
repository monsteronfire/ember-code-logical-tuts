import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('first', { path: 'first' });
  this.route('databinding', { path: 'databinding' });
  this.route('firstModel', { path: 'first-model' });
  this.route('secondModel', { path: 'second-model' });
  this.route('first-page', { path: 'first-page' });
  this.route('second-page', { path: 'second-page' });

  this.route('index', { path: '/' });
  this.route('about', { path: 'about' });
});

export default Router;
