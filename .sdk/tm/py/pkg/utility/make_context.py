# ShortLink SDK utility: make_context

from projectname_sdk.core.context import ShortLinkContext


def make_context_util(ctxmap, basectx):
    return ShortLinkContext(ctxmap, basectx)
