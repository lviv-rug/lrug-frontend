import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['jobs'],

  nextPage: function() {
    var nextPage,
        that = this;

    var jobs = this.store.find('jobs')
        .then(function(data) {
          that.set("jobs", data);

          that.get('jobs')
            .forEach(function (job, index) {
              var currentJob = that.get("id");

              if(++index == currentJob){

                if(index < data.content.length){
                  that.set("nextPage", ++currentJob);
                } else {
                  that.set("nextPage", false);
                }

              }

            });

        });
  }.on("init"),

  prevPage: function() {
    var prevPage,
        that = this;

    var jobs = this.store.find('jobs')
        .then(function(data) {
          that.set("jobs", data);

          that.get('jobs')
            .forEach(function (job, index) {
              var currentJob = that.get("id");

              if(++index == currentJob){

                if(index < 0){
                  that.set("prevPage", --currentJob);
                } else {
                  that.set("prevPage", false);
                }

              }

            });

        });
  }.on("init")
});
