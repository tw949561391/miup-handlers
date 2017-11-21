module.exports = function () {
    return async (ctx, next) => {
        try {
            await next();
        } catch (e) {
            ctx.status = e.status || 500;
            ctx.body = {
                code: e.code || 500,
                msg: e.message,
                name: e.name || 'unknow error'
            }
        }
    }
};