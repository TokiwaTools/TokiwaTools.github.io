$(function(){
  $("#GO").on("click",function(){
    $.ajax({
      url: "data.json",
      dataType: "json",
      success: function(jsonData){
        var name = $("#nameBox").val();
        var character = jsonData.data[ Math.floor( Math.random() * jsonData.data.length ) ];
        $("#results").html("<p>" + name + "さんは" + character + "ね</p>");
      }
    });
  });
});
