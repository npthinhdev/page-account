import axios from 'axios';

class Request {
  static get(url: string) {
    return this.http("GET", url);
  }
  static post(url: string, params: Object) {
    return this.http("POST", url, params);
  }
  static put(url: string, params: Object) {
    return this.http("PUT", url, params);
  }
  static delete(url: string, params: Object) {
    return this.http("DELETE", url, params);
  }
  static http(method: string, url: string, params?: Object) {
    return new Promise<any>((resolve, rejects) => {
      var config: { [key: string]: any } = {
        method,
        url: url,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      };
      if (params) {
        config.data = JSON.stringify(params);
      }
      axios(config)
        .then(resp => {
          if (resp.status === 200 || resp.status === 201) {
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
