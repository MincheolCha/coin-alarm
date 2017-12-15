const axios = require('axios');

function request(method, options, callback) {
    const { url, path, body, params } = options;

    const axiosOptions = {
        method,
        url: `${url}/${path}`,
        data: body,
        params,
    };

    return axios.request(axiosOptions).then((response) => {
        return callback(null, response.data);
    }, error => callback(error.response));
}

function get(options, callback) {
    request('get', options, callback);
}

function post(options, callback) {
    request('post', options, callback);
}

function put(options, callback) {
    request('put', options, callback);
}

function patch(options, callback) {
    request('patch', options, callback);
}

function del(options, callback) {
    request('delete', options, callback);
}

module.exports = {
    get,
    post,
    put,
    patch,
    del,
};
