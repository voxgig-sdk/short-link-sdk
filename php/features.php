<?php
declare(strict_types=1);

// ShortLink SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ShortLinkFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ShortLinkBaseFeature();
            case "test":
                return new ShortLinkTestFeature();
            default:
                return new ShortLinkBaseFeature();
        }
    }
}
