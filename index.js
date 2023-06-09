// SHOPIFY INTEGRATION
function getParams(a) {
  var b = document.getElementsByTagName("script");
  for (var i = 0; i < b.length; i++) {
    if (b[i].src.indexOf("/" + a) > -1) {
      var c = b[i].src.split("?").pop().split("&");
      var p = {};
      for (var j = 0; j < c.length; j++) {
        var d = c[j].split("=");
        p[d[0]] = d[1];
      }
      return p;
    }
  }
  return {};
}

const params = getParams("shopify.js");
const shop = params.shop;
const key = params.key;
if (key) {
  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://consensu.io/bundle.min.js?plugin=shopify&shop=" + shop;
  s.setAttribute("key", key);
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
} else {
  console.log("Consensu.io: No key found");
}
