import { ajax } from '@/assets/js/common.js'

export default {
  api_sumary (data) {
    return ajax({
      url: '/otc/sumary',
      method: 'post',
      data,
    })
  },

  api_origin (data) {
    return ajax({
      url: '/otc/origin',
      method: 'post',
      data,
    })
  },

  api_rank (data) {
    return ajax({
      url: '/otc/rank',
      method: 'post',
      data,
    })
  },

  api_speed (data) {
    return ajax({
      url: '/otc/tuntu',
      method: 'post',
      data,
    })
  },
}