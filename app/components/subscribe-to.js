import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    subscribe: function() {

      if(localStorage.subscribeEmail === undefined) {

        var subscribeEmail = [];
        var lastEmail = {'id': 1,'email': this.get("subscribeEmail")};

        subscribeEmail.push(lastEmail);
        localStorage.subscribeEmail = JSON.stringify(subscribeEmail)

      } else {

        var subscribeEmail = JSON.parse(localStorage.subscribeEmail);
        var arrayLength = subscribeEmail.length;
        var lastEmail = {'id': ++arrayLength,'email': this.get("subscribeEmail")};

        subscribeEmail.push(lastEmail);
        localStorage.subscribeEmail = JSON.stringify(subscribeEmail)

      }

    }
  }
});
