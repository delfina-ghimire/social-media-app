import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/userModel.js';

//New user registration
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  const { username } = req.body;

  //   HASHING ON THE SERVER SIDE
  //   Salt is amount of hashing in the given string

  //First made salt from bcrypt library with the value of 10. 10 is the amount of how much we want to alter the password by hashing.

  //after that we add the salt to our password using bcypt.hash which returns hashed password

  //pass hashedPassword in the newUserModel instead of password

  const newUser = new UserModel(req.body);

  try {
    const oldUser = await UserModel.findOne({ username });
    if (oldUser) {
      return res
        .status(400)
        .json({ message: 'usename is already registered!' });
    }
    const user = await newUser.save();
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login User

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    //It will find the user with that particular username that comes from the http request, in our userModel
    // If it exist in our database then it will be returned to const user

    //if user exists then
    if (user) {
      //validate password
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json('Incorrect Password');
      } else {
        const token = jwt.sign(
          {
            username: user.username,
            id: user._id,
          },
          process.env.JWT_KEY,
          { expiresIn: '1h' }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User doesn't exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
