import Ember from 'ember';

export default Ember.ArrayController.extend({
  cities: [],
  selectedCity: null,

  selectedCityChanged: function () {
    var that = this;
    var selectedCity = this.get('selectedCity');

    this.store.find('jobs')
      .then(function (data){
        that.set('jobs', data);

        that.get('jobs')
          .forEach(function (job, index){

            // var filteredContent = job.filterBy('city.id', selectedCity.id);
            // console.log('filteredContent', filteredContent)
            console.log('city ---->', job.get('city'))



            // console.log('selectedCity.id', selectedCity.id)

            // that.set('filteredContent', filteredContent);
          });






      })





  }.observes('selectedCity')

});
