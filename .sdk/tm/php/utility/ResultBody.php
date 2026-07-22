<?php
declare(strict_types=1);

// ShortLink SDK utility: result_body

class ShortLinkResultBody
{
    public static function call(ShortLinkContext $ctx): ?ShortLinkResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
