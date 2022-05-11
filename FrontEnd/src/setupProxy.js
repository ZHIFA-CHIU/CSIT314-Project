/**
 * Set up proxy
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware("/api1", {
            target: "http://localhost:8080",
            changeOrigin: true,
            pathRewrite: { "^/api1": "" }
        })
    );
}