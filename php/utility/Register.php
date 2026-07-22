<?php
declare(strict_types=1);

// ShortLink SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ShortLinkUtility::setRegistrar(function (ShortLinkUtility $u): void {
    $u->clean = [ShortLinkClean::class, 'call'];
    $u->done = [ShortLinkDone::class, 'call'];
    $u->make_error = [ShortLinkMakeError::class, 'call'];
    $u->feature_add = [ShortLinkFeatureAdd::class, 'call'];
    $u->feature_hook = [ShortLinkFeatureHook::class, 'call'];
    $u->feature_init = [ShortLinkFeatureInit::class, 'call'];
    $u->fetcher = [ShortLinkFetcher::class, 'call'];
    $u->make_fetch_def = [ShortLinkMakeFetchDef::class, 'call'];
    $u->make_context = [ShortLinkMakeContext::class, 'call'];
    $u->make_options = [ShortLinkMakeOptions::class, 'call'];
    $u->make_request = [ShortLinkMakeRequest::class, 'call'];
    $u->make_response = [ShortLinkMakeResponse::class, 'call'];
    $u->make_result = [ShortLinkMakeResult::class, 'call'];
    $u->make_point = [ShortLinkMakePoint::class, 'call'];
    $u->make_spec = [ShortLinkMakeSpec::class, 'call'];
    $u->make_url = [ShortLinkMakeUrl::class, 'call'];
    $u->param = [ShortLinkParam::class, 'call'];
    $u->prepare_auth = [ShortLinkPrepareAuth::class, 'call'];
    $u->prepare_body = [ShortLinkPrepareBody::class, 'call'];
    $u->prepare_headers = [ShortLinkPrepareHeaders::class, 'call'];
    $u->prepare_method = [ShortLinkPrepareMethod::class, 'call'];
    $u->prepare_params = [ShortLinkPrepareParams::class, 'call'];
    $u->prepare_path = [ShortLinkPreparePath::class, 'call'];
    $u->prepare_query = [ShortLinkPrepareQuery::class, 'call'];
    $u->result_basic = [ShortLinkResultBasic::class, 'call'];
    $u->result_body = [ShortLinkResultBody::class, 'call'];
    $u->result_headers = [ShortLinkResultHeaders::class, 'call'];
    $u->transform_request = [ShortLinkTransformRequest::class, 'call'];
    $u->transform_response = [ShortLinkTransformResponse::class, 'call'];
});
