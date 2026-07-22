<?php
declare(strict_types=1);

// ShortLink SDK exists test

require_once __DIR__ . '/../shortlink_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ShortLinkSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
