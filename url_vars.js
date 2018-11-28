var urls_https = [
  "https://sci-hub.tw",
  "https://sci-hub.is",
  "https://sci-hub.se",
  "https://sci-hub.hk",
  "https://sci-hub.cn",
  "https://sci-hub.la",
  "https://sci-hub.mn",
  "https://sci-hub.name",
  "https://sci-hub.tv",
  "https://sci-hub.nu",
  "https://sci-hub.ws",
  "https://sci-hub.ga",
  "https://www.sci-hub.gq",
  "https://www.sci-hub.nz",
  "https://sci-hub.wang"
  ];
var urls_http =[]
for (var _ =0;_<urls_https.length;_++ )
{
  urls_http.push(urls_https[_].replace("https","http"));
};
var colon_slash_slash_replace="colon_slash_slash";
var dot_replace = "dot_replace";
var urls_html="";
for (var _ =0;_<urls_https.length;_++ )
{
  var https_id = urls_https[_].replace("://",colon_slash_slash_replace).replace(".",dot_replace);
  var http_id = urls_http[_].replace("://",colon_slash_slash_replace).replace(".",dot_replace);
  urls_html+='<div id="'+https_id+'">'+urls_https[_]+'</div>';
  urls_html+='<div id="'+http_id+'">'+urls_http[_]+'</div> <br>';
};
