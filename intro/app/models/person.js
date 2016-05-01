import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Ember.Model.extend({
  firstName: attr(),
  lastName: attr(),
  age: attr()
});
