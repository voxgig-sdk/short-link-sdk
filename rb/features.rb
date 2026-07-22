# ShortLink SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ShortLinkFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShortLinkBaseFeature.new
    when "test"
      ShortLinkTestFeature.new
    else
      ShortLinkBaseFeature.new
    end
  end
end
