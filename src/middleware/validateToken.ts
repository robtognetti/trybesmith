import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const configJwt: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validationToken = (username: string, id: number) => {
  const tokenPass = jwt.sign({ data: { username, id } }, JWT_SECRET, configJwt);
  return tokenPass;
  if (!tokenPass || tokenPass.length === 0) {
    return;
  }
};

export default validationToken;