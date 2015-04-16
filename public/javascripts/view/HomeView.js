'use strict';

var HomeView = Backbone.View.extend({
    template: _.template($("#home-template").html()),

    events: {
        'click .delete-post': 'deletePost',
        'click .new-post': 'newPost',
        'click .edit-post': 'editPost'
    },
    
    initialize: function() {
      this.render();
    },
    
    render: function() {
      var self = this;

      
      this.$el.html(this.template({
        posts: this.model
      }));
    }
});
