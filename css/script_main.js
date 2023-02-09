$(function () {
  // 슬라이드
  function prev() {
    $(".panel li:last").prependTo(".panel");
    $(".panel").css("margin-left", -950);
    $(".panel").stop().animate({marginLeft: 0}, 600);
  }

  function next() {
    $(".panel")
      .stop()
      .animate({marginLeft: -950}, 600, function () {
        $(".panel li:first").appendTo(".panel");
        $(".panel").css({marginLeft: 0});
      });
  }

  $(".prev").click(function () {
    prev();
  });
  $(".next").click(function () {
    next();
  });

  setInterval(next, 6000);
});
