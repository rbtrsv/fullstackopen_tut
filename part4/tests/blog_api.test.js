const supertest = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Blog = require("../models/blog");
const helper = require("./test.helper");

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog));
  const blogPromises = blogObjects.map(blog => blog.save());
  await Promise.all(blogPromises);
});

describe("GET requests", () => {
  test("returns the correct amount of blog posts in the JSON format", async () => {
    const response = await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body.length).toBe(helper.initialBlogs.length);
  }, 100000);

  test("unique identifier property of the blog posts is named id", async () => {
    const response = await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body[0].id).toBeDefined();
    expect(response.body[0]._id).toBe(undefined);
  });
});

describe("POST requests", () => {
  test("successfully creates a new blog post", async () => {
    const newBlog = {
      title: "React patterns and more",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 12,
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const blogsAfterPost = await helper.getblogsinDB();
    expect(blogsAfterPost).toHaveLength(helper.initialBlogs.length + 1);
    const titles = blogsAfterPost.map(b => b.title);
    expect(titles).toContain(newBlog.title);
  }, 100000);

  test("verify if the likes property is missing and defaulting it to 0", async () => {
    const blogWithoutLikes = {
      title: "React patterns and more",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
    };

    const response = await api
      .post("/api/blogs")
      .send(blogWithoutLikes)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    expect(response.body.likes).toBeDefined();
    expect(response.body.likes).toBe(0);
  }, 100000);
});

afterAll(() => {
  mongoose.connection.close();
});
