
import { Context } from './Context'


class ShortLinkError extends Error {

  isShortLinkError = true

  sdk = 'ShortLink'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ShortLinkError
}

