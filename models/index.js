// import all models
const Post = require("./Post");
const User = require("./User");
const Connector = require("./Connector");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Post, {
  through: Connector,
  as: "connected_posts",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsToMany(User, {
  through: Connector,
  as: "connected_posts",
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Connector.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Connector.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Connector, {
  foreignKey: "user_id",
});

Post.hasMany(Connector, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Connector, Comment };
