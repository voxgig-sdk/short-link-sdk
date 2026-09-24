"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortLinkError = void 0;
class ShortLinkError extends Error {
    isShortLinkError = true;
    sdk = 'ShortLink';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ShortLinkError = ShortLinkError;
//# sourceMappingURL=ShortLinkError.js.map