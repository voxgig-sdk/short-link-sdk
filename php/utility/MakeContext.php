<?php
declare(strict_types=1);

// ShortLink SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ShortLinkMakeContext
{
    public static function call(array $ctxmap, ?ShortLinkContext $basectx): ShortLinkContext
    {
        return new ShortLinkContext($ctxmap, $basectx);
    }
}
