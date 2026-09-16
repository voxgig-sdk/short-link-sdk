

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"code","req":false,"type":"`$STRING`","index$":0}],"name":"url_shortening","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"https://google.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/set/index.php","json":"{\"operationId\":\"shortenUrl\",\"parameters\":[{\"description\":\"The long URL to be shortened. Must start with http:// or https://\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://google.com\",\"format\":\"uri\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"error\":{\"summary\":\"Invalid URL error\",\"value\":{\"C\":\"R\",\"M\":\"الرابط غير صحيح\"}},\"success\":{\"summary\":\"Successful URL shortening\",\"value\":{\"code\":\"https://li.page.gd/abc123\"}}},\"schema\":{\"oneOf\":[{\"description\":\"Response when URL is successfully shortened\",\"properties\":{\"code\":{\"description\":\"The final shortened URL\",\"example\":\"https://li.page.gd/abc123\",\"type\":\"string\"}},\"required\":[\"code\"],\"type\":\"object\"},{\"description\":\"Error response when URL shortening fails\",\"properties\":{\"C\":{\"description\":\"Status type code. 'G' for informational message, 'R' for error\",\"enum\":[\"G\",\"R\"],\"example\":\"R\",\"type\":\"string\"},\"M\":{\"description\":\"Error message from the server\",\"example\":\"الرابط غير صحيح\",\"type\":\"string\"}},\"required\":[\"M\",\"C\"],\"type\":\"object\"}]}}},\"description\":\"Successful operation - URL shortened successfully or error response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/set/index.php","segments":[{"lit":"api"},{"lit":"set"},{"lit":"index.php"}],"select":{"exist":["url"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"url_shortening","name__orig":"url_shortening","Name":"UrlShortening","name_":"url_shortening","name-":"url-shortening","NAME":"URL_SHORTENING","index$":0}, {"active":true,"entity":"url_shortening","key$":"BasicUrlShorteningFlow","kind":"basic","name":"BasicUrlShorteningFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"url_shortening_ref01","srcdatavar":"url_shortening_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-url_shortening_ref01"}}],"index$":0}]}, 'UrlShortening')
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
  
