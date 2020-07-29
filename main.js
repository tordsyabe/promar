$(document).ready(function () {
  $("video").each(function () {
    $(this).get(0).muted = true;
    $(this).get(0).play();
    console.log($(this));
  });
  $(".sidenav").sidenav();
});

$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
