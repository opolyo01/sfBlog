'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/', function(req, res) {

    if(!req.session.posts){
        req.session.posts = [{
        "id": 1,
        "text": "This is the content of my blog post.",
        "timestamp": "Thu Jul 01 09:46:02 PST 2010",
        "title": "The Title of My Blog Post"
      }, {
        "id": 2,
        "text": "Dear diary, today I met a fish who could talk.",
        "timestamp": "Tue Jun 29 17:49:27 PST 2010",
        "title": "A Weird Thing Happened..."
      }];
    }
    
    res.send(req.session.posts);
});


router.get('/:id', function(req, res) {
    var post = _.find(req.session.posts, function(blog){return blog.id === parseInt(req.params.id,10);});
    
    res.send(post);
});

router.post('/', function(req, res) {
    console.log(req.body);

    req.session.posts.push({
        "id": parseInt(Math.random()*10000, 10),
        "text": req.body.text,
        "timestamp": new Date(),
        "title": req.body.title
    });
    res.send({
        success: true
    });
});

//Update
router.post('/:id', function(req, res) {
    var idx = _.findIndex(req.session.posts, function(blog){return blog.id === parseInt(req.params.id,10);});
    req.session.posts[idx] = {
        "id": req.session.posts[idx].id,
        "text": req.body.text,
        "timestamp": new Date(),
        "title": req.body.title
    };
    res.send({
        success: true
    });
});

router.delete('/:id', function(req, res) {
    console.log(req.params.id);
    var idx = _.findIndex(req.session.posts, function(blog){return blog.id === parseInt(req.params.id,10);});

    req.session.posts.splice(idx, 1);
    res.send({
        success: true
    });
});

module.exports = router;
