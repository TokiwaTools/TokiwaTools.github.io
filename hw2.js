var videoTitles = new Array();  //タイトル
var videoLinks = new Array();   //リンク
var videoThumbs = new Array();   //サムネ

$(function(){
  $("#GO").on("click",function(){
    $.ajax({
      url: "get_xml.php?url=" + "http://www.ekidata.jp/api/s/1130224.xml",
      dataType: "xml",
      success: function(xmlData){
        console.log(xmlData);
        $(xmlData).find("item").each(
          function getTitles() {
            $(this).find("title").each(
              function() {
                videoTitles.push( $(this).text() );
                console.log($(this).text());
              }
            );
          },
          function getLinks() {
            $(this).find("link").each(
              function() {
                videoLinks.push( $(this).text() );
                console.log($(this).text());
              }
            );
          },
          function getThumbnails() {
            $(this).find("description").find(".nico-thumbnail").find("img").each(
              function() {
                videoThumbs.push( $(this).attr("src") + ".L" );
                console.log($(this).attr("src") + ".L");
              }
            );
          }
        );
      },
      error: function(xhr, status, err){
        console.log("Loading Error");
      }
    });
  });
});
