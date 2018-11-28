//Reference : http://lostsource.com/2012/12/01/detect-third-party-site-status-javascript.html

function isSiteOnline(url,callback) {
  // try to load favicon
  var timer = setTimeout(function(){
      // timeout after 5 seconds
      callback(false);
  },5000)

  var img = document.createElement("img");
  img.onload = function() {
      clearTimeout(timer);
      callback(true);
  }

  img.onerror = function() {
      clearTimeout(timer);
      callback(false);
  }

  img.src = url+"/favicon.ico";
};

//Adaptation for this website:
function val_status_jquery(iurl,div_id)
{
  var valid_id = "#"+div_id;
  console.log($(valid_id).html());
  var status = "off";
  var urlx = div_id.replace(colon_slash_slash_replace,"://").replace(dot_replace,".");
  var a_start = " ";
  var a_end = " ";
  // <a > url </a> status
  var htmlx = ""
  var status_html = '<span class="off"> OFF </span>';
  isSiteOnline(iurl,function(found){
  if(found) {
        status = "on"
        a_start='<a href="'+urlx+'" target="_blank">';
        a_end='</a>';
        status_html = '<span class="on"> ON </span>';
    }
    htmlx=a_start+urlx+a_end+status_html;
    $(valid_id).html(htmlx);
  });
}
