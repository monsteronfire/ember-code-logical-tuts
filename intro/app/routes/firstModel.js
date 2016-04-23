import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return ['item1', 'item2', 'item3', 'item4'];
  }
});
