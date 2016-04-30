import Ember from 'ember';

export default Ember.Controller.extend({
  girlsName: 'Christina',
  firstName: 'Johnny',
  lastName: 'Depp',
  actions: {
    showAlert: function() {
      // Getting properties of controller inside a method
      // 'this' keyword here refers to the controller

      this.set('firstName', 'Johnny');
      this.set('lastName', 'Depp');

      var actor = this.get('firstName') + ' ' + this.get('lastName');

      alert('The actor is ' + actor);
    },
    setAnotherActor: function() {
      // .set() takes two arguments. first is the property to set. second argument is the value to set it to
      this.set('firstName', 'Orlando');
      this.set('lastName', 'Bloom');

      var newActor = this.get('firstName') + ' ' + this.get('lastName');

      alert('The other actor is ' + newActor);
    },

    addNewItem: function() {
      // Got the error: ember Uncaught TypeError: Cannot read property 'pushObject' of null
      //This happened because the 'model' had not been declared in the route
      // So the line below was getting 'null' or something that didn't exist
       this.get('model').pushObject('newItem');
    }
  }
});
