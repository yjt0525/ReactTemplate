import axios from 'axios';
import { baseURL, baseURLDownload } from './config.js';

const queryString = require('query-string');

var _axios = axios.create({
    baseURL: baseURL
})

_axios.interceptors.request.use(
    (config) => {
        if (localStorage.token) {
            config.headers.accessToken = localStorage.token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);


_axios.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    
                    break;
                    /*      default :
                         vm.$message({
                           duration: 5000,
                           type: 'warning',
                           message: error.response.status + " " + error.response.statusText
                       }) */

            }

        }
        return Promise.reject(error);
    }
);

export default {
    //查询所有厂房 不分页
    getAllWorkShop: function(data, params) {
        return _axios.post("/api/ck/ckworkshop/getAllWorkShop", data, { params: params });
    },
}