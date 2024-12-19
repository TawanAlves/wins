import axios from 'axios'

let imageBaseURL = axios.create({
  baseURL: 'https://wins.company/assets/TesteFrontEnd/',
  withCredentials: true,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
})

let listBaseURL = axios.create({
  baseURL: 'https://winsapi.discloud.app/dev/products/uniforms',
  withCredentials: true,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
})

// if (window.location.origin !== 'http://localhost:5173/') {
//   baseURL = window.location.origin
// }

export { imageBaseURL, listBaseURL }
