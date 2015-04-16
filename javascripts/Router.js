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
        this.home = new HomeView({el: $("#container")});
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
        
    }
});


var router = new myRouter();
Backbone.history.start();