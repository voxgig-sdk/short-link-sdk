<?php
declare(strict_types=1);

// ShortLink SDK base feature

class ShortLinkBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ShortLinkContext $ctx, array $options): void {}
    public function PostConstruct(ShortLinkContext $ctx): void {}
    public function PostConstructEntity(ShortLinkContext $ctx): void {}
    public function SetData(ShortLinkContext $ctx): void {}
    public function GetData(ShortLinkContext $ctx): void {}
    public function GetMatch(ShortLinkContext $ctx): void {}
    public function SetMatch(ShortLinkContext $ctx): void {}
    public function PrePoint(ShortLinkContext $ctx): void {}
    public function PreSpec(ShortLinkContext $ctx): void {}
    public function PreRequest(ShortLinkContext $ctx): void {}
    public function PreResponse(ShortLinkContext $ctx): void {}
    public function PreResult(ShortLinkContext $ctx): void {}
    public function PreDone(ShortLinkContext $ctx): void {}
    public function PreUnexpected(ShortLinkContext $ctx): void {}
}
