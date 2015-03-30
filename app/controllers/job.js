import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['jobs'],

  getJobs: function() {
    var that = this;

    var jobs = this.store.find('jobs')
        .then(function(data) {
          that.set("jobs", data);

          var jobsLength = that.get("jobs.length"),
              currentJob = parseInt(that.get("id")),
              nextJob = currentJob+1,
              prevJob = currentJob-1;

          that.get('jobs')
            .forEach(function (job, index) {

              if(++index === currentJob){

                if(index < jobsLength){
                  that.set("nextPage", nextJob);
                } else {
                  that.set("nextPage", false);
                }

                if(index > 0){
                  that.set("prevPage", prevJob);
                } else {
                  that.set("prevPage", false);
                }

              }

            });

        });
  }.observes("model").on("init"),

  prevJob : function() {
    if (this.get("prevPage") !== undefined) {
      return this.store.find("jobs", this.get("prevPage"));
    }
  }.property("prevPage"),

  nextJob : function() {
    if (this.get("nextPage") !== undefined) {
      return this.store.find("jobs", this.get("nextPage"));
    }
  }.property("nextPage")
});
