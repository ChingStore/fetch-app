const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/orderDetails" || "/itemDetails",{
      target: "https://us-central1-daipos.cloudfunctions.net",
      changeOrigin: true
    })
  )
}
