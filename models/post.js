var mongoose = require("mongoose");

//Posts - title and content 
// 1. Create a schema for the resource 
var postSchema = new mongoose.Schema({
  title: String, 
  content: String, 
});

// 2. Set the resource to a mongoose model 
var Post = mongoose.model("Post", postSchema);


//think of this as the return function that will be given to whichever file is calling on this file
module.exports = Post; //this is calling on the final Post variable with the variable name Post, postSchema, and model association name "Post" into the export