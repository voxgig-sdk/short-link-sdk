# ShortLink SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ShortLinkUtility.registrar = ->(u) {
  u.clean = ShortLinkUtilities::Clean
  u.done = ShortLinkUtilities::Done
  u.make_error = ShortLinkUtilities::MakeError
  u.feature_add = ShortLinkUtilities::FeatureAdd
  u.feature_hook = ShortLinkUtilities::FeatureHook
  u.feature_init = ShortLinkUtilities::FeatureInit
  u.fetcher = ShortLinkUtilities::Fetcher
  u.make_fetch_def = ShortLinkUtilities::MakeFetchDef
  u.make_context = ShortLinkUtilities::MakeContext
  u.make_options = ShortLinkUtilities::MakeOptions
  u.make_request = ShortLinkUtilities::MakeRequest
  u.make_response = ShortLinkUtilities::MakeResponse
  u.make_result = ShortLinkUtilities::MakeResult
  u.make_point = ShortLinkUtilities::MakePoint
  u.make_spec = ShortLinkUtilities::MakeSpec
  u.make_url = ShortLinkUtilities::MakeUrl
  u.param = ShortLinkUtilities::Param
  u.prepare_auth = ShortLinkUtilities::PrepareAuth
  u.prepare_body = ShortLinkUtilities::PrepareBody
  u.prepare_headers = ShortLinkUtilities::PrepareHeaders
  u.prepare_method = ShortLinkUtilities::PrepareMethod
  u.prepare_params = ShortLinkUtilities::PrepareParams
  u.prepare_path = ShortLinkUtilities::PreparePath
  u.prepare_query = ShortLinkUtilities::PrepareQuery
  u.graphql_body = ShortLinkUtilities::GraphqlBody
  u.graphql_errors = ShortLinkUtilities::GraphqlErrors
  u.result_basic = ShortLinkUtilities::ResultBasic
  u.result_body = ShortLinkUtilities::ResultBody
  u.result_headers = ShortLinkUtilities::ResultHeaders
  u.transform_request = ShortLinkUtilities::TransformRequest
  u.transform_response = ShortLinkUtilities::TransformResponse
}
