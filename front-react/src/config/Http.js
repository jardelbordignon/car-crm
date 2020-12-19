import Axios from 'axios'

import { baseURL, apiURL } from './App'

export const Http = Axios.create({ baseURL })

export const HttpAuth = Axios.create({ baseURL: apiURL })

HttpAuth.interceptors.request.use(
  async config => {
    config.headers.authorization = 'Bearer ' + await localStorage.getItem('access_token')
    return config
  }
)

HttpAuth.interceptors.response.use( 
  res => { return res },
  err => {
    if (err.response) {
      if (err.response.status === 401) {
        localStorage.removeItem('access_token')
        window.location.replace('signin')
      }
    }
  }
)