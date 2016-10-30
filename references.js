// ===== SETUP 
var mongoose = require("mongoose");
var Post = require("./models/post");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/blog_moodels_2", function(err, success){
  if(err){console.log("Something went wrong connection to DB");} else {console.log("Connected to blog_moodels_2 successful");}
}); //Connects app to a db 


// ===== RESOURCES INITIALIZATION
// models: User, Post






// ===== TESTING / DOCUMENT 

// User.create({
//   email: "Test1@gmail.com", 
//   name: "Test1 Tester1"
// }, function(err, savedUser){
//   if (err) {
//     console.log("SOMETHING WRONG WITH SAVING");
//   }
//   else {
//     console.log("USER SAVED:\n" + savedUser);
//   }
// });


// POST CREATE TEST CODE === COMMENT OUT WHEN NOT CREATING USERS 
// Post.create({
//   title: "EXAMPLE PART 5 after REQUIRES",
//   content:"jibberish 5"
// }, function(err, savedPost){
//   if(err) {
//     console.log("POST NOT SAVED");
//   }
//   else {
//     User.findOne({email: "Test1@gmail.com"}, function(err, foundUser){
//       if(err) {
//         console.log("Couldn't find user");
//       }
//       else {
//         foundUser.posts.push(savedPost);
//         foundUser.save(function(err, successfulSaveData){
//           if(err) {
//             console.log("Could not save");
//           } else {
//             console.log("We've properly saved the post to USER!:" + successfulSaveData);
//           }
//         });
//       }
//     });
//   }
// });



//FIND USER AND FIND ALL POSTS FOR USER 

User.findOne({email:"Test1@gmail.com"}).populate("posts").exec(function(err, user){
  if(err) {
    console.log(err);
  }
  else {
    console.log(user);
  }
});