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

//Login User

export const loginUser = async(req, res) => {
    const {username, password} = req.body
    try{
        const user = await UserModel.findOne({username:username})
        //It will find the user with that particular username that comes from the http request, in our userModel
        // If it exist in our database then it will be returned to const user


        //if user exists then
        if(user){
            //validate password
            const validity = await bcrypt.compare(password, user.password);

            validity? res.status(200).json(user): res.status(400).json("Wrong Password")

        }
        else{
            res.status(404).json("User doesn't exists")
        }
    }catch(error){
         res.status(500).json({ message: error.message });
    }
}
