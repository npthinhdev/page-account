import { Request } from '../commons';

export const getUsers = async () => {
  try {
    let url = "/accounts";
    return await Request.get(url);
  } catch (error) {
    throw error;
  }
}

export const createUser = async (user: any) => {
  try {
    let url = "/accounts";
    let data = Object.assign({}, user);
    return await Request.post(url, data);
  } catch (error) {
    throw error;
  }
}
