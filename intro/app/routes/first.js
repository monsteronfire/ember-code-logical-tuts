import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return ['red', 'green', 'blue'];
  },
  actions: {
    clickHandled: function() {
      console.log('First Clickt in router!');
    }
  }
});
