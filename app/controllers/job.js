import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['jobs'],

  setJobs: function() {
    var that = this;
    var currentJobID = that.get("id");

    var jobs = this.store.find('jobs')
        .then(function(data) {
          that.set("jobs", data);
        });



  }.observes("id").on("init")

});
