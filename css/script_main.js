$(function () {
  var i = 0;

  // 슬라이드
  function slide() {
    i++;

    if (i > $(".panel li:last").index()) {
      i = 0;
    }

    $(".panel li")
      .eq(i - 1)
      .css({zIndex: 3})
      .stop()
      .animate({marginLeft: -950}, 700, function () {
        $(".panel li")
          .eq(i - 1)
          .css({zIndex: 1});
      });
    $(".panel li").eq(i).css({zIndex: 2, marginLeft: 0});
    $(".panel li")
      .eq(i + 1)
      .css({zIndex: 1});
  }
  // $(".prev").click(function () {
  //   prev();
  // });
  // $(".next").click(function () {
  //   next();
  setInterval(slide, 5000);
});
