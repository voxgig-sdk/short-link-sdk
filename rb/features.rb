# ShortLink SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ShortLinkFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShortLinkBaseFeature.new
    when "ratelimit"
      ShortLinkRatelimitFeature.new
    when "retry"
      ShortLinkRetryFeature.new
    when "test"
      ShortLinkTestFeature.new
    when "timeout"
      ShortLinkTimeoutFeature.new
    else
      ShortLinkBaseFeature.new
    end
  end
end
