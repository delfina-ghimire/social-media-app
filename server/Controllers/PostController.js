import PostModel from '../Models/postModel.js';

//Create new posts
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  //as soon as we are receiving req.body, we are also embedding it in PostModel.Then we're getting the object in newPost

  try {
    await newPost.save();
    res.status(200).json('Post successfully added!');
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


