<?php
declare(strict_types=1);

// ShortLink SDK utility: prepare_body

class ShortLinkPrepareBody
{
    public static function call(ShortLinkContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
