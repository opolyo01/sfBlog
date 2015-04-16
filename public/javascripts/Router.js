'use strict';

var myRouter = Backbone.Router.extend({
    post: null,
    home: null,
    posts: null,
    
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
        var self = this;
        $.get("/api/blog", function(resp){
            self.posts = resp;
            new HomeView({el: $("#container"), model: resp});
        });
    },

    postRoute: function () {
        this.post = new PostView({el: $("#container"), model:{
            headTitle: "New Post",
            formType: "create-form"
        }});
    },

    editRoute: function (id) {
        $.get("/api/blog/"+id, function(resp){
            new PostView({el: $("#container"), model:{
                headTitle: "Editing Post",
                post: resp,
                id: id,
                formType: "edit-form"
            }});
        });
    },

    deleteRoute: function(id){
        $.ajax({
            url: '/api/blog/'+id,
            type: 'DELETE',
            success: function(result) {
                console.log("blog deleted - "+id);
                window.location.hash = "#";
            }
        });
    }
});


var router = new myRouter();
Backbone.history.start();