import { imageBaseURL } from './modules'

export default {
  getPeds(item) {
    return imageBaseURL.get(`peds/${item}`)
  },

  getUniform(item) {
    return imageBaseURL.get(`uniforms/${item}`)
  },

  getWeapons(item) {
    return imageBaseURL.get(`weapons/${item}`)
  },
}
