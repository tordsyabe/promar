$(document).ready(function () {
  $("video").each(function () {
    $(this).get(0).muted = true;
    $(this).get(0).play();
    console.log($(this));
  });
  $(".sidenav").sidenav();
});
