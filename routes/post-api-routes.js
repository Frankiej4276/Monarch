


var db = require("../models");



module.exports = function(app) {
  //get for getting all posts
  app.get("/api/posts", function(req, res) {
    db.Posts.findAll({}).then(function(dbposts) {
      return res.json(dbposts);
    });
  });

  //get for searching for post by subject
app.get("/api/posts/:subject.id", function(req,res){
  db.Posts.findAll({
    where: {
      subjectid: req.params.subject.id
    } 
  }).then(function(dbposts){
     return res.json(dbposts);
  });
});
 //get for searching for post by author
app.get("/api/posts/:authorsid", function(req,res){
  db.Posts.findAll({
    where: {
      authorsid: req.params.authors.id
    } 
  }).then(function(dbposts){
    return res.json(dbposts);
  });
});
 //get for searching for single post by post_id
app.get("/api/posts/:id", function(req,res){
  db.Posts.findAll({
    where: {
      postsid: req.params.id
    } 
  }).then(function(dbposts){
    return res.json(dbposts);
  });
});


  // create new post
  app.post("/api/posts", function(req, res){
    console.log(req.body);
    db.Posts.create({
      post_title: req.body.post_title,
      post_body: req.body.post_body,
    }).then(function(dbposts){
      res.json(dbposts);
    });
  });
//put route for editing posts
  app.put("/api/posts", function(req,res){
    db.Posts.update(req.body,{
      where: {
        id: req.body.id
      }
    }).then(function(dbPost){
      res.json(dbposts);
    });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.Posts.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });















};
