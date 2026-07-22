-- ShortLink SDK error

local ShortLinkError = {}
ShortLinkError.__index = ShortLinkError


function ShortLinkError.new(code, msg, ctx)
  local self = setmetatable({}, ShortLinkError)
  self.is_sdk_error = true
  self.sdk = "ShortLink"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ShortLinkError:error()
  return self.msg
end


function ShortLinkError:__tostring()
  return self.msg
end


return ShortLinkError
