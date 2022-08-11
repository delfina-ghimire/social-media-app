import mongoose from 'mongoose';
import PostModel from '../Models/postModel.js';
import UserModel from '../Models/userModel.js';

//Create new posts
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  //as soon as we are receiving req.body, we are also embedding it in PostModel.Then we're getting the object in newPost

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get a Post
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update a post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('Post Updates Successfully');
    } else {
      res.status(403).json('You can only update your own post');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json('Post removed successfully');
    } else {
      res.status(403).json('You can only delete your own post');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Like and dislike a post
export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      //if the user hasn't already liked the post
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json('Post Liked');
    } else {
      //dislike the post
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json('Post UnLiked');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get Timeline Posts
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    //Timeline posts includes their own posts as well as posts from their followers
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingPosts = await UserModel.aggregate([
      {
        //Step 1 : Match
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        //Step 2 of aggregation pipeline: LOOKUP
        $lookup: {
          from: 'posts',
          localField: 'following',
          foreignField: 'userId',
          as: 'followingPosts',
        },
      },
      {
        //Step 3: Project
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
