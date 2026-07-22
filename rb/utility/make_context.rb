# ShortLink SDK utility: make_context
require_relative '../core/context'
module ShortLinkUtilities
  MakeContext = ->(ctxmap, basectx) {
    ShortLinkContext.new(ctxmap, basectx)
  }
end
