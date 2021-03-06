import { ajax } from '@/assets/js/common.js'

export default {
  login (data) {
    return ajax({
      url: '/otc/user/get',
      method: 'post',
      data,
    })
  },

  adduser (data) {
    return ajax({
      url: '/otc/user/set',
      method: 'post',
      data,
    })
  },

  updateuser (data) {
    return ajax({
      url: '/otc/user/update',
      method: 'post',
      data,
    })
  },

  getuserlist (data) {
    return ajax({
      url: '/otc/user/list',
      method: 'post',
      data,
    })
  },

  dropuser (data) {
    return ajax({
      url: '/otc/user/delete',
      method: 'post',
      data,
    })
  },
}