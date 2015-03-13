import DS from 'ember-data';

var Cities = DS.Model.extend({
  city: DS.attr()
});

Cities.reopenClass({
  FIXTURES: [
    {
      id: 1,
      city: 'Київ',
    },
    {
      id: 2,
      city: 'Львів',
    },
    {
      id: 3,
      city: 'Луцьк',
    }
]});

export default Cities;