import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 1000 * 60;
export const ajax = function (params) {
  return axios({
    url: params.url,
    method: params.method || 'get',
    data: params.data,
  })
}
