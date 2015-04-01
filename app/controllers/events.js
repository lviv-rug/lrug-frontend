import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['date'],
  sortAscending: true,

  events: function() {
    var that = this;

    this.store.find('events')
      .then(function(data) {
        that.set("events", data);

          var date = that.get('events').map(function(event){
            return event.get('date');
          });

          that.set('eventDate', date||[]);
/////////////////////////////////////////////


          var arrayDate = new Array(that.get('eventDate'));
          var q1 = $(arrayDate)[0];

          var sortDate  = $.unique(q1);

          sortDate.sort().reverse().filter(function(el,i,a){
            return i==a.indexOf(el);
          });


/////////////////////////////////////////////

          var sortEventsLength = sortDate.length+1;
          var q3 = [];
          var dateArray = [];

          for(var i = 0; i < sortEventsLength; i++ ) {

            var q2 = that.get('events')
              .forEach(function (event, index) {

                if(event.get('date') === sortDate[i] ){
                  dateArray.push(new Date(sortDate[i]).toString())

                  q3.push(event);
                  return q3;
                }

                that.set('sortEvents', q3);

                that.set('dateArray', dateArray)
                // console.log(dateArray)



              });

            }

      });

  }.on('init')
});
