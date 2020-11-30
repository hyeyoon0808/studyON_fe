const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rooms",
    createProxyMiddleware({
      target: "http://ed51579b-default-springser-29a1-1434439925.us-east-1.elb.amazonaws.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/todo",
    createProxyMiddleware({
      target: "http://ed51579b-default-springser-29a1-1434439925.us-east-1.elb.amazonaws.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/todo-oneday",
    createProxyMiddleware({
      target: "http://ed51579b-default-springser-29a1-1434439925.us-east-1.elb.amazonaws.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/point-grade",
    createProxyMiddleware({
      target: "http://ed51579b-default-springser-29a1-1434439925.us-east-1.elb.amazonaws.com",
      changeOrigin: true,
    })
  );
};
