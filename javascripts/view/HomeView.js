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

      // var resp = {
      //   "blog": {
      //     "posts": [{
      //       "id": 1278002762936,
      //       "text": "This is the content of my blog post.",
      //       "timestamp": "Thu Jul 01 09:46:02 PST 2010",
      //       "title": "The Title of My Blog Post"
      //     }, {
      //       "id": 1277858967163,
      //       "text": "Dear diary, today I met a fish who could talk.",
      //       "timestamp": "Tue Jun 29 17:49:27 PST 2010",
      //       "title": "A Weird Thing Happened..."
      //     }]
      //   }
      // };
      // console.log(resp.blog.posts);
      this.$el.html(this.template({
        posts: this.model.posts
      }));

      // this.$el.html(this.template({
      //   posts: resp.blog.posts
      // }));
    }
});
