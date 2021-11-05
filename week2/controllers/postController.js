const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.getPost = async (req, res) => {
  let id = req.params.id;
  const post = await Post.findById(id);
  res.render("post", {
    post
  });
};

exports.editPost = async (req, res) => {
  let id = req.params.id;
  const post = await Post.findById(id);
  await Post.findByIdAndUpdate({ id: id, title: post.title, detail: post.detail });
  res.redirect(`/posts/${id}`);
};

exports.deletePost = async (req, res) => {
  let id = req.params.id;
  await Post.findByIdAndRemove(id);
  res.redirect("/");
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts
  });
};
