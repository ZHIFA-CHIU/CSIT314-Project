/**
 * Set up proxy
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware("/", {
            target: "http://3.26.161.183:8080",
            changeOrigin: true,
            pathRewrite: { "^/api1": "" }
        })
    );
}