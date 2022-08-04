import bcrypt from 'bcrypt';
import UserModel from '../Models/userModel.js';

//New user registration
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

//   HASHING ON THE SERVER SIDE
  //   Salt is amount of hashing in the given string

  //First made salt from bcrypt library with the value of 10. 10 is the amount of how much we want to alter the password by hashing.

  //after that we add the salt to our password using bcypt.hash which returns hashed password

  //pass hashedPassword in the newUserModel instead of password

  const newUser = new UserModel({
    username,
    password: hashedPassword,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
