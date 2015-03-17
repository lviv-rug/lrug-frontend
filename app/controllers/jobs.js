import Ember from 'ember';

export default Ember.ArrayController.extend({
  cities: [],
  selectedCity: null,
  productSearchTerm: '',

  filteredContent: function(){
    var selectedCity = this.get('selectedCity.city');
    var city = this.get('arrangedContent');
    var rx = new RegExp(selectedCity);

    if (selectedCity !== null) {
      return city.filter(function(city) {
        return city.get('city').match(rx);
      });
    } else {
      return city;
    };

  }.property('arrangedContent', 'selectedCity'),

  actions : {

    sortBy: function(property) {
      this.set('sortProperties', [property]);
      this.set('sortAscending', !this.get('sortAscending'));
    }
  }

});
