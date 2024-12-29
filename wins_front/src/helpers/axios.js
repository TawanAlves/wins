import axios from 'axios'

let imageBaseURL = axios.create({
  baseURL: 'https://wins.company/assets/TesteFrontEnd/',
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
})

if (window.location.origin !== 'http://localhost:5173') {
  imageBaseURL = window.location.origin
}

const listBaseURL = axios.create({
  baseURL: 'https://winsapi.discloud.app/dev/products/',
  withCredentials: false,
})

export { imageBaseURL, listBaseURL }
