import { Request } from '../commons';

export const getUsers = async () => {
  try {
    let url = "/accounts";
    let resp: Array<Object> = await Request.get(url);
    return resp;
  } catch (error) {
    throw error;
  }
}
