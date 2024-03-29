const _ = require("lodash");

const dummy = (blogs) => {
  if (blogs) {
    return 1;
  }
};

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => sum + blog.likes;
  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  let favorite = blogs[0];
  blogs.forEach(blog => {
    if (blog.likes > favorite.likes) {
      favorite = blog;
    }
  });

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  };
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;

  const authorCounts = _.countBy(blogs, "author");
  const maxAuthor = _.maxBy(Object.keys(authorCounts), (author) => authorCounts[author]);

  return {
    author: maxAuthor,
    blogs: authorCounts[maxAuthor]
  };
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null;

  const authorLikes = blogs.reduce((accumulator, blog) => {
    accumulator[blog.author] = (accumulator[blog.author] || 0) + blog.likes;
    return accumulator;
  }, {});

  const maxLikesAuthor = _.maxBy(Object.keys(authorLikes), (author) => authorLikes[author]);

  return {
    author: maxLikesAuthor,
    likes: authorLikes[maxLikesAuthor]
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};