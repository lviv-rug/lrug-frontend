import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    subscribe: function() {
      var that = this;

      var email = this.get("subscribeEmail");
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(email)) {
        $('.error').removeClass('show').addClass('hide');
        $('.success').removeClass('hide').addClass('show');

        if(localStorage.subscribeEmail === undefined) {
          var subscribeEmail = [];
          var lastEmail = {'id': 1,'email': email};
        } else {
          var subscribeEmail = JSON.parse(localStorage.subscribeEmail);
          var arrayLength = subscribeEmail.length;
          var lastEmail = {'id': ++arrayLength,'email': email};
        }

        subscribeEmail.push(lastEmail);
        localStorage.subscribeEmail = JSON.stringify(subscribeEmail)

        setTimeout(function() {
          that.set('subscribeEmail', '');
          $('.success').removeClass('show').addClass('hide');
        }, 1000);

      } else {
        $('.error').removeClass('hide').addClass('show');
      }
    }
  }
});
