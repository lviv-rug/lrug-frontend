import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    menu: function(){
      if($('.header-menu').hasClass('show')){
        $('.header-menu').removeClass('show').addClass('hide');
      } else {
        $('.header-menu').removeClass('hide').addClass('show');
      }
    }
  }
});
