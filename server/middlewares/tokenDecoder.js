
import jwt from 'jsonwebtoken'

const tokenDecoder = {
  decode: (token) => {
    return jwt.decode(token)
  },
  getUid: (token) => {
    return jwt.decode(token)._uid;
  },
  verify: (token) => {
    const decode = jwt.verify(token, process.env.SECRET);
    if (decode.status === 'active') {
      return true;
    } else {
      return false;
    }
  }
}

export default tokenDecoder;