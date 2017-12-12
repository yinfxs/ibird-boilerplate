/**
 * 模块依赖
 */

const mongoose = require('mongoose');


/**
 * 令牌key
 */
module.exports.tokenKey = 'token';

/**
 * 令牌密钥
 */
module.exports.secret = 'ibird_secret';

/**
 * 令牌验证接口白名单
 */
module.exports.whitelist = [
    'POST /api/login',
    'GET /api/i18n',
    /^GET\s*\/$/
];

/**
 * 管理用户登录
 * @param {string} env - 环境变量
 */
module.exports.login = async ctx => {
    const { username, password } = ctx.request.body;
    const User = mongoose.model('User');
    const user = await User.findOne({ username: new RegExp(username, 'i'), password }, { password: -1 });
    return user;
};