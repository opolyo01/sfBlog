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
        var resp = {
            "blog": {
              "posts": [{
                "id": 1278002762936,
                "text": "This is the content of my blog post.",
                "timestamp": "Thu Jul 01 09:46:02 PST 2010",
                "title": "The Title of My Blog Post"
              }, {
                "id": 1277858967163,
                "text": "Dear diary, today I met a fish who could talk.",
                "timestamp": "Tue Jun 29 17:49:27 PST 2010",
                "title": "A Weird Thing Happened..."
              }]
            }
          };
          this.blogs = resp;
          new HomeView({el: $("#container"), model: resp.blog});
        // $.get("/Blog/api", function(resp){
        //   new HomeView({el: $("#container"), model: JSON.parse(resp).blog});
        // });
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
        window.location.hash = "#";
    }
});


var router = new myRouter();
Backbone.history.start();