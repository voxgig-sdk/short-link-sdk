package core

type ShortLinkError struct {
	IsShortLinkError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewShortLinkError(code string, msg string, ctx *Context) *ShortLinkError {
	return &ShortLinkError{
		IsShortLinkError: true,
		Sdk:              "ShortLink",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ShortLinkError) Error() string {
	return e.Msg
}
