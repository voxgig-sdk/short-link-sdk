# ShortLink SDK feature factory

from feature.base_feature import ShortLinkBaseFeature
from feature.test_feature import ShortLinkTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ShortLinkBaseFeature(),
        "test": lambda: ShortLinkTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
