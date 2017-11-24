const Util = require('util');
module.exports = function () {
    return async (ctx, next) => {
        try {
            await next();
        } catch (e) {
            let body = e.body || {};
            let code = body.code || e.code || 500;
            let status = body.status || 500;
            let name = body.name || e.name;
            let msg = body.msg || e.message;
            let source = "miup";

            ctx.status = status;
            ctx.body = {
                code: code,
                msg: msg,
                name: name,
                source: source
            }
        }
    }
};