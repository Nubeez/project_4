$(function () {
  var pagenum = $(".slide_count b:first-of-type");
  var page = 1;
  pagenum.text(page);
  // 슬라이드
  function prev() {
    $(".panel li:last").prependTo(".panel");
    $(".panel").css("margin-left", -950);
    $(".panel").stop().animate({marginLeft: 0}, 600);
    page--;
    if (page < 1) {
      page = 4;
    }
    pagenum.text(page);

    // if ($(pagenum).hasClass("show") == false) {
    //   $(this).addClass("show");
    // }
  }

  function next() {
    $(".panel")
      .stop()
      .animate({marginLeft: -950}, 600, function () {
        $(".panel li:first").appendTo(".panel");
        $(".panel").css({marginLeft: 0});
      });
    page++;
    if (page > 4) {
      page = 1;
    }
    pagenum.text(page);
    return false;
  }

  $(".prev").click(function () {
    prev();
  });
  $(".next").click(function () {
    next();
  });
  //   setInterval(next, 6000);
});
