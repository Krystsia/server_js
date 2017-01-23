import CustomError from '../components/errorComponent/customError.js';

let wrapper = document.querySelector('.articles');

let cashRequestsStorage = [];
let dataStorrage = new Map();

export default class Request {
    constructor(apiKey, method, url, ...headers) {
        this.apiKey = apiKey;
        this.method = method;
        this.url = url;
        this.headers = headers;
    }

    get allheaders() {
        let allHeaders = {};
        for(let header of this.headers) {
            Object.assign(allHeaders, header);
        }
    }

    get stringRequest() {
        return this.url +'&apiKey=' + this.apiKey;
    }

    get config() {
        return {
            method: this.method,
            headers: this.allheaders
        }
    }

    makeRequest() {
       return fetch(this.stringRequest, this.config)
          .then(handleErrors)
          .then(data => data.json())
          .then((data) => {
              dataStorrage.set(this.stringRequest, data);
              return data},
          (error) => {
              CustomError.init(error, wrapper);
              return {};
          })
    }

    // implementation of proxy

    proxyGetData() {
      const request =  cashRequestsStorage.filter((item) => this.stringRequest === item);
      if (!request.length) {
         cashRequestsStorage.push(this.stringRequest);
        return this.makeRequest();
      } else {
        return Promise.resolve(dataStorrage.get(request[0]));
      }
    }

    getData() {
      return this.proxyGetData();
    }

}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
