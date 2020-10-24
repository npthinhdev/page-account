import axios from 'axios';

import Config from './Config';

class Request {
  static get(url: string) {
    return this.http("GET", url);
  }
  static post(url: string, params: Array<string>) {
    return this.http("POST", url, params);
  }
  static put(url: string, params: Array<string>) {
    return this.http("PUT", url, params);
  }
  static delete(url: string, params: Array<string>) {
    return this.http("DELETE", url, params);
  }
  static http(method: string, url: string, params?: Array<string>) {
    return new Promise<any>((resolve, rejects) => {
      var configs: { [key: string]: any } = {
        method,
        header: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      };
      if (params) {
        configs.data = JSON.stringify(params);
      }
      let urlAPI = Config.BASE_URL + url;
      axios(urlAPI, configs)
        .then(resp => {
          if (resp.status === 200) {
            resolve(resp.data);
          } else {
            rejects(resp.statusText);
          }
        })
        .catch(error => {
          rejects("Cann't connect to server: " + error);
        })
    })
  }
}

export default Request;
