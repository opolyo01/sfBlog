'use strict';

var PostView = Backbone.View.extend({
    template: _.template($("#new-post-template").html()),

    events: {
        'submit .create-form': 'submitPost',
        'submit .edit-form': 'submitPost'
    },
    
    initialize: function() {
      this.render();
    },
    
    submitPost: function(e){
      e.preventDefault();
      var title = $(".form-title").val();
      var text = $(".form-text").val();
      $.ajax({
          url: '/api/blog',
          data: JSON.stringify({
            title: title,
            text: text
          }),
          type: 'POST',
          contentType: 'application/json',
          success: function(result) {
              console.log("added blog entry");
              window.location.hash = "#";
          }
      });
    },

    editPost: function(e){
      e.preventDefault();
      var title = $(".form-title").val();
      var text = $(".form-text").val();
      $.ajax({
          url: '/api/blog/'+this.model.id,
          data: JSON.stringify({
            title: title,
            text: text
          }),
          type: 'POST',
          contentType: 'application/json',
          success: function(result) {
              console.log("updated blog entry");
              window.location.hash = "#";
          }
      });
    },

    render: function() {
      var self = this;
      this.$el.html(this.template({
        headTitle: this.model.headTitle,
        text: this.model.post ? this.model.post.text : "",
        title: this.model.post ? this.model.post.title : "",
        formType: this.model.formType
      }));
    }
});
