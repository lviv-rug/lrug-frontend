import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('blogs', params.blogs_id);
  }
});
