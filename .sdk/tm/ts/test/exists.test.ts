
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShortLinkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ShortLinkSDK.test()
    equal(testsdk instanceof ShortLinkSDK, true,
      'ShortLinkSDK.test() must return a client synchronously')
  })

})
