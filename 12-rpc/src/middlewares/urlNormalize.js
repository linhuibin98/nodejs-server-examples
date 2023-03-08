const { normalize } = require('path');
const { parse, format } = require('url');

module.exports = function urlNormalizeMiddleware() {
    return (req, res, next) => {
        // 解决 windows、Linux 系统使用 normalize 路径分隔符不一致的问题
        const pathname = normalize(req.path).replaceAll('\\', '/');
        const urlParsed = parse(req.url);

        let shouldRedirect = false;

        // 重定向不规范的路径
        if (req.path != pathname) {
            urlParsed.pathname = pathname;
            shouldRedirect = true;
        }

        // 执行重定向或者略过
        if (shouldRedirect) {
            res.redirect(format(urlParsed));
        } else {
            next();
        }
    };
}
