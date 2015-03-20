import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['blog'],

  getPost: function() {
    var that = this;

    this.store.find('blog')
      .then(function(data) {
        that.set("blog", data);

        var postLength = that.get("blog.length"),
            currentPost = parseInt(that.get("id")),
            nextPost = currentPost+1,
            prevPost = currentPost-1;

        that.get('blog')
          .forEach(function (post, index) {

            if(++index === currentPost){

              if(index < postLength){
                that.set("nextPage", nextPost);
              } else {
                that.set("nextPage", false);
              }

              if(index > 0){
                that.set("prevPage", prevPost);
              } else {
                that.set("prevPage", false);
              }

            }

          });

      });

  }.observes('model').on('init'),

  prevPost : function() {
    if (this.get("prevPage") !== undefined) {
      return this.store.find("blog", this.get("prevPage"));
    }
  }.property("prevPage"),

  nextPost: function() {
    if (this.get("nextPage") !== undefined) {
      return this.store.find("blog", this.get("nextPage"));
    }
  }.property("nextPage")
});
