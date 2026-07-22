# ShortLink SDK configuration

module ShortLinkConfig
  def self.make_config
    {
      "main" => {
        "name" => "ShortLink",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://li.page.gd",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "url_shortening" => {},
        },
      },
      "entity" => {
        "url_shortening" => {
          "fields" => [
            {
              "active" => true,
              "name" => "code",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
          ],
          "name" => "url_shortening",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "https://google.com",
                        "kind" => "query",
                        "name" => "url",
                        "orig" => "url",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/set/index.php",
                  "parts" => [
                    "api",
                    "set",
                    "index.php",
                  ],
                  "select" => {
                    "exist" => [
                      "url",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ShortLinkFeatures.make_feature(name)
  end
end
