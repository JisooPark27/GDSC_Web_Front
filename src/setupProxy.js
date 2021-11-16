const { createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function (app) {
    const url = "http://54.147.11.212"
    app.use(
        "/api",
        createProxyMiddleware({
            target: url,
            changeOrigin: true
        })
    );
};