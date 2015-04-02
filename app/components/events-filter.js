import Ember from 'ember';

export default Ember.Component.extend({

  eventsList: function(){
    var that = this;

    var filteredArray = that.get('sortEvents').filter(function(el){
      return parseInt(that.get('date')) === parseInt(el.get('date'))
    });
    that.set('filteredArray', filteredArray);

  }.observes('sortEvents')
});
