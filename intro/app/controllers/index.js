import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    linkClicked: function() {
      this.transitionToRoute('about');
    }
  }
});
