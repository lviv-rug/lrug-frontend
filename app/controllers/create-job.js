import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['jobs'],

  actions: {
    createJob: function() {
      var that = this;

      this.store.find('jobs')
        .then(function(data) {
          that.set("jobs", data);


          var id = that.get('jobs.length') + 1,
              position = that.get("position"),
              company = that.get("company"),
              link = that.get("link"),
              state = that.get("state"),
              salary = that.get("salary"),
              email = that.get("email"),
              description = that.get("description");

          var jobs = that.store.createRecord('jobs', {
            id: id,
            position: position,
            company: company,
            city: state,
            price: salary,
            email: email,
            description: description
          });


          jobs.save();

          that.set('position', '');
          that.set('company', '');
          that.set('link', '');
          that.set('state', '');
          that.set('salary', '');
          that.set('email', '');
          that.set('description', '');

        });

    }

  }

});
