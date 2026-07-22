<?php
declare(strict_types=1);

// ShortLink SDK configuration

class ShortLinkConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ShortLink",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://li.page.gd",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "url_shortening" => [],
                ],
            ],
            "entity" => [
        'url_shortening' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'code',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'url_shortening',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'https://google.com',
                        'kind' => 'query',
                        'name' => 'url',
                        'orig' => 'url',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/set/index.php',
                  'parts' => [
                    'api',
                    'set',
                    'index.php',
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ShortLinkFeatures::make_feature($name);
    }
}
