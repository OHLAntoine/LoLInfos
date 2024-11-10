import { env } from 'node:process'
import { module } from 'node:module'

module.exports = {
  publicPath: env.NODE_ENV === 'production' ? '/LoLInfos/' : '/'
}
