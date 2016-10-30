// ===== SETUP 
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_moodels"); //Connects app to a db 

// ===== RESOURCES 

//Posts - title and content 
// 1. Create a schema for the resource 
var postSchema = new mongoose.Schema({
  title: String, 
  content: String, 
});

// 2. Set the resource to a mongoose model 
var Post = mongoose.model("Post", postSchema);

//Users - email and name
//1. Create a schema for the resource
var userSchema = new mongoose.Schema({
  email: String, 
  name: String, 
  posts: [postSchema], //this is telling mongoose that posts should be embeeded along with the User object in the database.
});

//2. Set the resource to a mongoose model 
var User = mongoose.model("User", userSchema);



// ===== START OF DOCUMENT 

// //Creating a new user (without the .create method-- we're using the normal object method)
// var newUser = new User({
//   email: "test2@test.com",
//   name: "Test2 Tester",
// });

// //This is where we add a post to the user's posts []... it's not created in the initialization of the newUser variable, but it is added later AFTER. 
// newUser.posts.push({
//   title: "Test2 posted something.",
//   content: "This is Test2 content", 
// });


// // You must .save the object because we're not using the create method. 
// newUser.save(function(err, userInfo){
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("Save SUCCESSFUL!" + userInfo);
//   }
// });


//Same thing as a user test, but we're creating a new post. 

// var newPost = new Post({
//   title: "test post 1",
//   content: "This is just the first test post",
// });

// newPost.save(function(err, postInfo){
//   if(err) {
//     console.log("Something went wrong, COULD NOT SAVE POST");
//   }
//   else {
//     console.log("Everything is good. The following post was added: \n" + postInfo);
//   }
// });

// TESTING FOR RETRIEVING USER, AND ADDING CONTENT AFTERWARDS: 

// // =====>>> THIS IS NOT HOW YOU DO IT. ---> var testUser = db.user.find({email:"test2@test.com"});

// User.findOne({name:"Test2 Tester"}, function(err, foundUser){
//   if (err) {
//     console.log("Couldn't run findOne");
//   }
//   else {
//     console.log("We found " + foundUser.name);
//     foundUser.posts.push({ //remember that we're pushing to the 'posts' created from the User schema, not the POST object- don't get confused by that 's' at the end of foundUser.post(S)
//       title: "Tester an ADDED post!", 
//       content:"Another Test post!"});
//   }
//     foundUser.save(function(err, savedContent){
//       if (err) {
//         console.log("We couldn't save the new post");
//       }
//       else {
//         console.log("We saved the new content: \n" + savedContent);
//       }
//     });
// }) //This is how you find a user within the application-- not within mongo console. Note that User.find({}) wil bring back an array, so that's why we're using findOne.



// Keep in mind that we're not actually adding to the POST model in MONGODB. Instead, we're just 
// adding onto the POSTS ARRAY that we defined within the USER model, that just HAPPENS TO USE THE SCHEMA 
// FOR THE POST MODEL (which needed to be defined BEFORE THE USER MODEL so that the reference made sense).