
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ShortLink',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://li.page.gd",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      url_shortening: {
      },

    }
  }


  entity = {
    "url_shortening": {
      "fields": [
        {
          "name": "code",
          "type": "`$STRING`"
        }
      ],
      "name": "url_shortening",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "https://google.com",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/set/index.php",
              "parts": [
                "api",
                "set",
                "index.php"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

