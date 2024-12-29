function get(axiosInstance, url, params) {
  return axiosInstance.get(url, { params })
}

function post(axiosInstance, url, data) {
  return axiosInstance.post(url, data)
}

function put(axiosInstance, url, data) {
  return axiosInstance.put(url, data)
}

function del(axiosInstance, url) {
  return axiosInstance.delete(url)
}

export { get, post, put, del }
