package voxgigshortlinksdk

import (
	"github.com/voxgig-sdk/short-link-sdk/go/core"
	"github.com/voxgig-sdk/short-link-sdk/go/entity"
	"github.com/voxgig-sdk/short-link-sdk/go/feature"
	_ "github.com/voxgig-sdk/short-link-sdk/go/utility"
)

// Type aliases preserve external API.
type ShortLinkSDK = core.ShortLinkSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ShortLinkEntity = core.ShortLinkEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ShortLinkError = core.ShortLinkError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewUrlShorteningEntityFunc = func(client *core.ShortLinkSDK, entopts map[string]any) core.ShortLinkEntity {
		return entity.NewUrlShorteningEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewShortLinkSDK = core.NewShortLinkSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewShortLinkSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ShortLinkSDK  { return NewShortLinkSDK(nil) }
func Test() *ShortLinkSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
