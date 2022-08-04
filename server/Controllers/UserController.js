import bcrypt from 'bcrypt';
import UserModel from '../Models/userModel.js';

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
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        res.status(200).json(user);
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
