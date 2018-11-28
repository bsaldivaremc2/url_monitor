$("#urls_monitor").html(urls_html);
for (var _ =0;_<urls_https.length;_++ )
{
  var https_id = urls_https[_].replace("://",colon_slash_slash_replace).replace(".",dot_replace);
  var http_id = urls_http[_].replace("://",colon_slash_slash_replace).replace(".",dot_replace);
  val_status_jquery(urls_https[_],https_id);
  val_status_jquery(urls_http[_],http_id);
};
