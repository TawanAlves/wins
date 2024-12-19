import { listBaseURL } from './modules'

export default {
  getAllPeds() {
    return listBaseURL.get(`peds/`)
  },

  getAllUniforms() {
    return listBaseURL.get(`uniforms/`)
  },

  getAllWeapons() {
    return listBaseURL.get(`weapons/`)
  },
}
