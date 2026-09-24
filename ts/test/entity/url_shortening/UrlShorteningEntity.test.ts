

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ShortLinkSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('UrlShorteningEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORT_LINK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORT_LINK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortLinkSDK.test()
    const ent = testsdk.UrlShortening()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORT_LINK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'url_shortening.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"h":"Code","n":"code","r":false,"t":"`$STRING`","key$":"code","index$":0}},"name":"url_shortening","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/set/index.php","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://google.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/set/index.php","q":{"exist":["url"]},"r":{},"s":[{"lit":"api"},{"lit":"set"},{"lit":"index.php"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"url_shortening","name__orig":"url_shortening","Name":"UrlShortening","name_":"url_shortening","name-":"url-shortening","NAME":"URL_SHORTENING","index$":0}, {"active":true,"entity":"url_shortening","key$":"BasicUrlShorteningFlow","kind":"basic","name":"BasicUrlShorteningFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"url_shortening_ref01","srcdatavar":"url_shortening_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-url_shortening_ref01"}}],"index$":0}]}, 'UrlShortening', {"GET /api/set/index.php":{"protocol":"http","operationId":"shortenUrl","responses":{"200":{"description":"Successful operation - URL shortened successfully or error response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","description":"Response when URL is successfully shortened","properties":{"code":{"type":"string","description":"The final shortened URL","example":"https://li.page.gd/abc123"}},"required":["code"],"x-ref":"#/components/schemas/SuccessResponse"},{"type":"object","description":"Error response when URL shortening fails","properties":{"M":{"type":"string","description":"Error message from the server","example":"الرابط غير صحيح"},"C":{"type":"string","description":"Status type code. 'G' for informational message, 'R' for error","enum":["G","R"],"example":"R"}},"required":["M","C"],"x-ref":"#/components/schemas/ErrorResponse"}]},"examples":{"success":{"summary":"Successful URL shortening","value":{"code":"https://li.page.gd/abc123"}},"error":{"summary":"Invalid URL error","value":{"M":"الرابط غير صحيح","C":"R"}}}}}}},"parameters":[{"name":"url","in":"query","description":"The long URL to be shortened. Must start with http:// or https://","required":true,"schema":{"type":"string","format":"uri","example":"https://google.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let url_shortening_ref01_data = Object.values(setup.data.existing.url_shortening)[0] as any

    // LOAD
    const url_shortening_ref01_ent = client.UrlShortening()
    const url_shortening_ref01_match_dt0: any = {}
    const url_shortening_ref01_data_dt0 = (await url_shortening_ref01_ent.load(url_shortening_ref01_match_dt0)).data()
    assert(null != url_shortening_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/url_shortening/UrlShorteningTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ShortLinkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['url_shortening01','url_shortening02','url_shortening03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORT_LINK_TEST_URL_SHORTENING_ENTID': idmap,
    'SHORT_LINK_TEST_LIVE': 'FALSE',
    'SHORT_LINK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SHORT_LINK_TEST_URL_SHORTENING_ENTID']

  const live = 'TRUE' === env.SHORT_LINK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORT_LINK_TEST_URL_SHORTENING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ShortLinkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SHORT_LINK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
