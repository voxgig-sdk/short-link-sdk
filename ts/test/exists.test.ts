
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShortLinkSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ShortLinkSDK.test()
    equal(null !== testsdk, true)
  })

})
