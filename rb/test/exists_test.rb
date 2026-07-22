# ShortLink SDK exists test

require "minitest/autorun"
require_relative "../ShortLink_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ShortLinkSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
