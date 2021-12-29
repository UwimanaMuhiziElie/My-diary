import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const encrypter = (userId) => {
  const token = jwt.sign({
    userId,
  },
  process.env.JWT_KEY,
  {
    expiresIn: '12h',
  });
  return token;
};
