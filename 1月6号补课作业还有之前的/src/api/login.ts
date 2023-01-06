/*封装接口*/
import request from '../untils/httpRequse'

export function login(data: object) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
