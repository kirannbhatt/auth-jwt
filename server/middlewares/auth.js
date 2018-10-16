import jwt from 'jsonwebtoken'
import tokenDecoder from './tokenDecoder'

const authWare = (req, res, next) => {
  const token = req.get('Authorization')
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err) {
      res.status(403)
      res.json(err)
    } else {
      req.body._uid = tokenDecoder.getUid(req.get('Authorization'));
      next();
    }
  })
}

export default authWare;