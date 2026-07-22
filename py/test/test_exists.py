# ProjectName SDK exists test

import pytest
from shortlink_sdk import ShortLinkSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ShortLinkSDK.test(None, None)
        assert testsdk is not None
