'use strict';

var PostView = Backbone.View.extend({
    template: _.template($("#new-post-template").html()),

    events: {
        'submit #post-form': 'submitPost'
    },
    
    initialize: function() {
      this.render();
    },
    
    render: function() {
      var self = this;
      this.$el.html(this.template({
        title: this.model.title
      }));
    }
});
