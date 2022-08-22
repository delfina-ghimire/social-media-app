import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/userModel.js';


//get all users
export const getAllUsers= async(req, res) =>{
  try {
    let users = await UserModel.find();
    users = users.map((user)=>{
      const {password, ...otherDetails} = user._doc
      return otherDetails
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

//get user from database
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    //1. find user
    const user = await UserModel.findById(id);

    //2. if user exists
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json('User Not Found');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update a user

export const updateUser = async (req, res) => {
  //fetch id from the parameter
  const id = req.params.id;

  //fetch data from request body
  const { _id, currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === _id) {
    {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_KEY,
          { expiresIn: '1h' }
        );

        res.status(200).json({user, token});
      } catch (error) {
        res.status(500).json(error);
      }
    }
  } else {
    res.status(403).json('Acess Denied! You can only update your own profile');
  }
};

//Delete User

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId == id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json('Profile successfully deleted');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('Access denied! You can only delete your own profile');
  }
};


//Follow a user

export const followUser = async(req, res) => {
  const id = req.params.id; //who is supposed to be followed

  //destructure the currentUserId who wants to follow another user

  const{currentUserId} = req.body; //user who wants to follow
//because the user can't follow themselves
  if(currentUserId === id){
    res.status(403).json("Action Forbidden")
  }
  else{
    try {
      const followUser = await UserModel.findById(id); // user who we want to follow
       const followingUser = await UserModel.findById(currentUserId);

      //If the user is not already being followed
      if(!followUser.followers.includes(currentUserId)){
        await followUser.updateOne({$push: {followers:currentUserId}});
        await followingUser.updateOne({$push: {following: id}})
        res.status(200).json("Profile Followed!")
      } else{
        res.status(403).json("You already follow this Profile")
      }
      
    } catch (error) {
      res.status(500).json(error);
      
    }
  }
}


//UnFollow a user

export const UnfollowUser = async(req, res) => {
  const id = req.params.id;
  const{currentUserId} = req.body; 
  if(currentUserId === id){
    res.status(403).json("Action Forbidden")
  }
  else{
    try {
      const followUser = await UserModel.findById(id); 
       const followingUser = await UserModel.findById(currentUserId);
      if(followUser.followers.includes(currentUserId)){
        await followUser.updateOne({$pull: {followers:currentUserId}});
        await followingUser.updateOne({$pull: {following: id}})
        res.status(200).json("Profile UnFollowed!")
      } else{
        res.status(403).json("You Now Unfollow this Profile")
      }
      
    } catch (error) {
      res.status(500).json(error);     
    }
  }
}
