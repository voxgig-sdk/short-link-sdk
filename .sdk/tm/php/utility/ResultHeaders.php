<?php
declare(strict_types=1);

// ShortLink SDK utility: result_headers

class ShortLinkResultHeaders
{
    public static function call(ShortLinkContext $ctx): ?ShortLinkResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
