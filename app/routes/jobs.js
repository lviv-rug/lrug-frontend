import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('jobs');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    this.store.find('cities').then(function(cities) {
        controller.set('cities', cities);
    });
  }
});
