
$( document ).ready(function() {

  console.log("ready!");

  $("li").hover(function(){
      $(this).addClass("active");
  }, function(){
      $(this).removeClass("active");
  });
  
});