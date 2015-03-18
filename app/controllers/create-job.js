import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['jobs'],

  actions: {
    createJob: function() {
      var that = this;

      this.store.find('jobs')
        .then(function(data) {
          that.set("jobs", data);

          var position = that.get("position");
          var company = that.get("company");
          var link = that.get("link");
          var state = that.get("state");
          var salary = that.get("salary");
          var email = that.get("email");
          var description = that.get("description");

          var jobs = that.store.createRecord('jobs', {
            position: position,
            company: company,
            city: state,
            price: salary,
            email: email,
            description: description
          });


          jobs.save();



        });




    }

  }

});
