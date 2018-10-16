import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user'
import tokenDecoder from '../middlewares/tokenDecoder'

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
      if (user) {
        return res.status(403).json({ message: 'User already exists' });
      }
      const newUser = await User.create(
        {
          email: req.body.email,
          password: generateHash(req.body.password)
        }
      );

      if (newUser) {
        return res.status(200).json({ message: 'User created successfully' });
      }

    } catch (error) {
      res.json({ message: 'Error' });
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req.body.email
      });
      const payload = {
        name: user.email,
        _uid: user._uid,
        date: Date.now()
      };

      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = signToken(payload);
          res.status(200).json({ message: 'Welcome to the world of JS', Token: token });
        }
      }
    } catch (error) {
      res.status(403).json({ message: 'You cannot pass!!!' });
    }
  },
  verify: async (req, res) => {
    if(tokenDecoder.verify(req.body.token)) {
      res.status(200);
    } else {
      res.status(401);
    }
  }
}

export default authController