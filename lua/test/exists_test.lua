-- ShortLink SDK exists test

local sdk = require("short-link_sdk")

describe("ShortLinkSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
