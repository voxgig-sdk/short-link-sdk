# ShortLink SDK utility: prepare_body
require_relative 'media'
module ShortLinkUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ShortLinkUtilities.raw_body(ctx.reqdata) if ShortLinkUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
