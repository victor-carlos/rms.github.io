$(function(){
  $(".portfolio-item .img-fluid").click(function(){
    $("#selected-photo").attr("src", $(this).attr("src"));
    $("#galeria-focus").modal().hide().fadeIn("slow");
  });
});
