import { URL } from "./constants"

const config = {
  baseUrl: URL,
  headers: {
    "Content-Type": "application/json",
  },
};
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllArray() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getPoems(tag) {
    return fetch(`${this._baseUrl}?q=${tag}`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getPoemStrings(tag) {
    return fetch(`${this._baseUrl}/?q=${tag}&onlyLines=1`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

export const api = new Api(config);
