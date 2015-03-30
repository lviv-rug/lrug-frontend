import Ember from 'ember';

export default Ember.Component.extend({

  pagination: function() {
    var that = this;

    this.get('controller').get('store').find(this.get('modelName'))
      .then(function(data) {
        that.set("items", data);

        var itemsLength = that.get("items.length"),
            currentItem = parseInt(that.get("itemId")),
            nextItem = currentItem+1,
            prevItem = currentItem-1;

        that.get('items')
          .forEach(function (item, index) {

            if(++index === currentItem){

              if(index < itemsLength){
                that.set("nextPage", nextItem);
              } else {
                that.set("nextPage", false);
              }

              if(index > 0){
                that.set("prevPage", prevItem);
              } else {
                that.set("prevPage", false);
              }

            }

          });

      });

  }.observes("itemId").on("init"),

  prevItem : function() {
    if (this.get("prevPage") !== undefined) {
      return this.store.find(this.get('modelName'), this.get("prevPage"));
    }
  }.property("prevPage"),

  nextItem : function() {
    if (this.get("nextPage") !== undefined) {
      return this.store.find(this.get('modelName'), this.get("nextPage"));
    }
  }.property("nextPage")
});
