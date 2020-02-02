const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/itemDetails?itemId=RHfVDGM5L2BKPaIwGOXA",{
      target: "https://us-central1-daipos.cloudfunctions.net",
      changeOrigin: true
    })
  )

  app.use(
    proxy("/orderDetails?orderId=fYgtD9PzPK3AyV7DEQbq",{
      target: "https://us-central1-daipos.cloudfunctions.net",
      changeOrigin: true
    })
  )
}
