import { listBaseURL } from '@/helpers/axios.js'
import { get } from './modules'

export default {
  getAllPeds() {
    return get(listBaseURL, `peds`)
  },

  getAllUniforms() {
    return get(listBaseURL, `uniforms`)
  },
  getAllWeapons() {
    return get(listBaseURL, `weapons`)
  },
}
