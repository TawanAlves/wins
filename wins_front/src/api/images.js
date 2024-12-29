import { imageBaseURL } from '@/helpers/axios.js'
import { get } from './modules'

export default {
  getPed(item) {
    return get(imageBaseURL, `peds/${item}.webp`)
  },

  getUniform(item) {
    return get(imageBaseURL, `uniforms/${item}.webp`)
  },
  getWeapon(item) {
    return get(imageBaseURL, `weapons/${item}.webp`)
  },
}
