import axios, { AxiosInstance } from 'axios'

export const createClient = (): AxiosInstance => {
  let c = axios.create()

  c.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    error => {
      let a = onError(error)
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // return Promise.reject(a)
      throw a
    },
  )

  return c
}

const onError = (error: any): Error | undefined => {
  if (!error.response || !error.response.data) return error

  let data = error.response.data

  if (!data.type || !data.status) return error

  let e = new Error(data.status)

  return e
}
