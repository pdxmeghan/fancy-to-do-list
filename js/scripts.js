$(document).ready(function() {
  $("form#makeLists").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input.newList").val();

    var list = {name: inputtedName, tasks: []};

    $("ul#listNames").append("<li>" + inputtedName + "</li>");

    $("#listNames li").last().click(function(){
      $("#listTitle").append("<h2>" + inputtedName + "</h2>");
    });

    $("input.newList").val("");
  });
});
