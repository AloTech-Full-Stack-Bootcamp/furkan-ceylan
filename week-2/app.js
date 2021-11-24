const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Post = require("./models/post");
const methodOverride = require("method-override");
const app = express();
const PostController = require("./controllers/PostController");
const PageController = require("./controllers/PageController");

mongoose
  .connect("mongodb+srv://pcat-furkan-ceylan.s18mj.mongodb.net/dbPcat", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connection succesful.");
  })
  .catch((err) => {
    throw err;
  });

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.get("/", PostController.getAllPosts);
app.get("/about", PageController.getAboutPage);
app.get("/add_post", PageController.getAddPage);
app.get("/post/:id", PostController.getPost);
app.get("/post/edit/:id", PageController.editPost);
app.post("/posts", PostController.createPost);
app.put("/post/:id", PostController.editPost);
app.delete("/post/:id", PostController.deletePost);
app.get("/post", (req, res) => {
  res.render("post");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App has started on port ${port}`);
});
