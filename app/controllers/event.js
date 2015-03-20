import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['events'],

  eventsList: function(){
    var that = this;

    this.store.find('events')
      .then(function(data) {
        that.set("events", data);
      });
  }.observes("id").on("init")


});
