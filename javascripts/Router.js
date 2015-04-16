'use strict';
var myRouter = Backbone.Router.extend({
    post: null,
    home: null,
    
    initialize: function() {
    },

    routes: {
        "post": "postRoute",
        "home": "homeRoute",
        "delete/:id": "deleteRoute",
        "edit/:id": "editRoute",
        "*path": "homeRoute"
    },

    homeRoute: function(){
        $.get("/Blog/api", function(resp){
          new HomeView({el: $("#container"), model: resp.blog});
        });
    },

    postRoute: function () {
        this.post = new PostView({el: $("#container"), model:{
            title: "New Post"
        }});
    },

    editRoute: function (id) {
        this.post = new PostView({el: $("#container"), model:{
            title: "Editing Post",
            id: id
        }});
    },

    deleteRoute: function(id){
        $.ajax({
            url: '/Blog/api/'+id,
            type: 'DELETE',
            success: function(result) {
                console.log("blog deleted - "+id);
            }
        });
    }
});


var router = new myRouter();
Backbone.history.start();