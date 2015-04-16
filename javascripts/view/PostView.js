'use strict';

var PostView = Backbone.View.extend({
    template: _.template($("#new-post-template").html()),

    events: {
        'submit #post-form': 'submitPost'
    },
    
    initialize: function() {
      this.render();
    },
    
    submitPost: function(){
      var title = $("#form-title");
      var text = $("#form-text");
      $.ajax({
          url: '/Blog/api',
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

    render: function() {
      var self = this;
      this.$el.html(this.template({
        title: this.model.title
      }));
    }
});
