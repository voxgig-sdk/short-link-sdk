-- ShortLink SDK configuration

local function make_config()
  return {
    main = {
      name = "ShortLink",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://li.page.gd",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["url_shortening"] = {},
      },
    },
    entity = {
      ["url_shortening"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "code",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
        },
        ["name"] = "url_shortening",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "https://google.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/set/index.php",
                ["parts"] = {
                  "api",
                  "set",
                  "index.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
