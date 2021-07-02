import { AuthToken } from './authToken';
import Axios from 'axios';
//import { getLanguageCode } from "i18n";
import Qs from 'qs';
import * as moment from 'moment';
import config from '../../config/index';
import { getLanguageCode } from 'i18n';
import pako from 'pako';

const authAxios = Axios.create({
  //baseURL: config.backendUrl,
  baseURL: config.REACT_APP_BACKEND_URL,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter: (prefix, value) => {
        if (
          value instanceof moment ||
          value instanceof Date
        ) {
          return value.toISOString();
        }

        return value;
      },
    });
  },
  transformRequest: Axios.defaults.transformRequest.concat(
    function (data, headers) {
      // compress strings if over 512B
      if (typeof data === 'string' && data.length > 512) {
        headers['Content-Encoding'] = 'gzip';
        return pako.gzip(data);
      } else {
        delete headers['Content-Encoding'];
        return data;
      }
    }
  )
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = await AuthToken.get();

    if (options.headers.token || token) {
      options.headers['Authorization'] = `Bearer ${options.headers.token || token}`;
    }

    options.headers['Accept-Language'] = getLanguageCode();

    return options;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

export default authAxios;
