var mongoose = require("mongoose"); 

//Users - email and name
//1. Create a schema for the resource
var userSchema = new mongoose.Schema({
  email: String, 
  name: String, 
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId, //this is just how you reference an id from mongoose
      ref: "Post" // this is where you match the objectID from above with a DB name (where it pulls from)... which in this case is "Post" as defined above
    }
    ], //this is different from embedding. this is REFERENCING the ID by calling on the object from the actual POST DB object. 
});

//2. Set the resource to a mongoose model 
var User = mongoose.model("User", userSchema);

module.exports = User;  // exports the User variable which contains the final initalized variable name, model association name, and schema to use. 