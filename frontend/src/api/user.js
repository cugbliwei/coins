import { ajax } from '@/assets/js/common.js'

export default {
  login (data) {
    return ajax({
      url: '/otc/user/get',
      method: 'post',
      data,
    })
  },
}