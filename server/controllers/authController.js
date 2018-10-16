import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user'

const hashRounds = 10;

function generateHash(password) {
  return bcrypt.hashSync(password, hashRounds)
}
function signToken(payload) {
  return jwt.sign(payload, process.env.SECRET)
}

const authController = {
  register: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        },
      });
      if(user) {
        return res.status(403).json({ message: 'User already exists' });
      }
      const newUser = await User.create(
        {
          email: req.body.email,
          password: generateHash(req.body.password)
        }
      );

      if(newUser){
        return res.status(200).json({ message: 'User created successfully'});
      }
      
    } catch(error) {
      res.json({ message: 'Error'});
    }
  }
}

export default authController