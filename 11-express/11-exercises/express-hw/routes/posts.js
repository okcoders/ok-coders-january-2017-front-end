var express = require('express');
var router = express.Router();


// display a list of all posts
router.get('/', function(req, res, next) {
    var id = req.params.id;
    res.send("You requested post " + id);
});

// return an HTML form for creating a new post
router.get('/new', function(req, res) {
    var id = req.params.id;
    res.send("You requested post " + id);
});

// create a new post
router.post('/', function(req, res) {
    var id = req.params.id;
    res.send("You posted " + id);
});

// display a specific post
router.get('/:id', function(req, res) {
    var id = req.params.id;
    res.send("You requested post " + id);
});

// return an HTML form for editing a post
router.get('/:id/edit', function(req, res) {
    var id = req.params.id;
    res.send("You requested post " + id);
});

// update a specific post
router.put('/:id', function(req, res) {
    var id = req.params.id;
    res.send("You put post " + id);
});

// delete a specific post
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    res.send("You deleted post " + id);
});

// display a list of all comments for a post
router.get('/:id/comments', function(req, res) {
    var id = req.params.id;
    res.send("You requested post " + id);
});

// return an HTML form for creating a new comment for a post
router.get('/:id/comments/new', function(req, res) {
    var id = req.params.id;
    res.send("You requested post " + id);
});

// create a new comment for a post
router.post('/:id/comments', function(req, res) {
    var id = req.params.id;
    res.send("You posted " + id);
});

// display a specific comment for a post
router.get('/:id/comments/:cid', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    res.send("You requested comment " + cid + "on post " + id);
});

// return an HTML form for editing a comment for a post
router.get('/:id/comments/:cid/edit', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    res.send("You requested to edit comment " + cid + " on post " + id);
});

// update a specific comment for a post
router.put('/:id/comments/:cid', function(req, res) {
    var id = req.params.id;
    res.send("You put post " + id);
});

// delete a specific comment
router.delete('/:id/comments/:cid', function(req, res) {
    var id = req.params.id;
    res.send("You deleted post " + id);
});


module.exports = router;
