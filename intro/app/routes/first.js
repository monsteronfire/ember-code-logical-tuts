import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    clickHandled: function() {
      console.log('First Clickt in router!');
    }
  }
});
