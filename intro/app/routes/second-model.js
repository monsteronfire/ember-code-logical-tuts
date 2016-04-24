import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      firstname: 'Samantha',
      lastname: 'K'
    };
  }
});
