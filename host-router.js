(function () {
  var host = (location.hostname || "").toLowerCase();
  var path = location.pathname;
  var map = {
    "listing.black-dex.online": "/listing.html",
    "affiliates.black-dex.online": "/affiliates.html",
    "token.black-dex.online": "/token.html"
  };
  var dest = map[host];
  if (dest && path !== dest && path !== dest.replace(".html", "")) {
    location.replace(dest + location.search + location.hash);
  }
})();
