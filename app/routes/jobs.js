import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return this.store.find('jobs');
    return JSON.parse(localStorage.Jobs);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    this.store.find('cities').then(function(cities) {
        controller.set('cities', cities);
    });
  }
});
