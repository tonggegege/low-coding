import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      return config
    },
    responseSuccessFn(res) {
      return res.data
    }
  }
})

export default hyRequest
