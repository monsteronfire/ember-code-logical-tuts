import DS from 'ember-data';

export default Ember.Model.extend({
  firstName: DS.attr(),
  lastName: 'smith'
});
