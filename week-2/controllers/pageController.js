const Post = require("../models/Post");

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPage = (req, res) => {
  res.render("add_post");
};

exports.editPost = async (req, res) => {
  let id = req.params.id;
  const post = await Post.findById(id);
  res.render("edit", {
    post
  });
};
