const Notfound=require('../error').Notfound;
module.exports = function () {
    return async () => {
        throw new Notfound('resource not found',404);
    }
};