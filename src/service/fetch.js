
import axios from 'axios'

let filterData = (data) => {
  for (const key in data) {
    const val = data[key]
    if (typeof val === 'undefined' || val === '' || val === null) {
      delete data[key]
    }
  }
  return data
}

let host = () => {
  let oHost = ''
  if (window.location.port) {
    oHost = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/'
  } else {
    oHost = window.location.protocol + '//' + window.location.hostname + '/'
  }
  return oHost
}

// 封装fetch方法
export const fetch = (params) => {
  filterData(params.data || {})
  return new Promise(function (resolve, reject) {
    let method = params.method ? params.method.toLowerCase() : 'get'
    let o = {
      url: host() + params.url,
      method: method,
      timeout: params.timeout || 100000,
      headers: params.headers || ''
    }
    if (method === 'post') {
      o.data = params.data || ''
    } else {
      o.params = params.data || ''
    }

    axios(o).then((res) => {
      let data = res.data
      if (typeof data !== 'object') {
        console.log("typeof data !== 'object'")
        reject(res)
        return
      }
      if (data.error === '0' || data.code === 0 || data.status === 1) {
        resolve(data)
      } else {
        console.log('err')
        reject(data)
      }
    }).catch((res) => {
      reject(res)
    })
  })
}
