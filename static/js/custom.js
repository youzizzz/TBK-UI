$(function () {
  $(document).scroll(function () {
    console.info($(window).scrollTop());
    if ($(window).scrollTop() >= 150) {
      $("#topMenu").addClass("topMenuShow").show();
    }else{
      $("#topMenu").removeClass("topMenuShow").hide();
    }
  });
})
