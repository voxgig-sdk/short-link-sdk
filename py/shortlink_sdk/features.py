# ShortLink SDK feature factory

from shortlink_sdk.feature.base_feature import ShortLinkBaseFeature
from shortlink_sdk.feature.ratelimit_feature import ShortLinkRatelimitFeature
from shortlink_sdk.feature.retry_feature import ShortLinkRetryFeature
from shortlink_sdk.feature.test_feature import ShortLinkTestFeature
from shortlink_sdk.feature.timeout_feature import ShortLinkTimeoutFeature


_FEATURES = {
    "base": lambda: ShortLinkBaseFeature(),
    "ratelimit": lambda: ShortLinkRatelimitFeature(),
    "retry": lambda: ShortLinkRetryFeature(),
    "test": lambda: ShortLinkTestFeature(),
    "timeout": lambda: ShortLinkTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
