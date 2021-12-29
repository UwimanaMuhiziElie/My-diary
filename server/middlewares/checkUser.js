import users from '../models/Users';
import Responsender from '../helpers/responseHandler';
import { UNPROCESSABLE_ENTITY_STATUS_CODE } from '../helpers/statusCodeHandler';

export default async (req, res, next) => {
  const response = new Responsender();// uses responses senders always it comes from responses handlers and it is calling what is there
  const user = users.find((c) => c.email === req.body.email);
  if (user) {
    response.error(UNPROCESSABLE_ENTITY_STATUS_CODE, 'email already taken');
    return response.send(res);
  }
  next();
};
