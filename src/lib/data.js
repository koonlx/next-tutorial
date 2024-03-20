import { Post, User } from './model';
import { connectToDb } from './utils';

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch posts!!');
  }
};
export const getPost = async ({ slug }) => {
  try {
    connectToDb();
    const post = await Post.findOne(slug);
    return post;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch post!!');
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to load Users!!');
  }
};
export const getUser = async ({ id }) => {
  try {
    connectToDb();
    const user = await User.findOne(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to load User!!');
  }
};
