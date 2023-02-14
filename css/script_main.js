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
      .animate({marginLeft: -950}, function () {
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
  setInterval(next, 6000);

  // 슬라이드 next 무한클릭 막기
  let click1 = true;
  let click2 = true;
  $(".next").click(function () {
    if (click1) {
      next();
      click1 = !click1;
      setTimeout(function () {
        click1 = true;
      }, 1000);
    }
  });
  $(".prev").click(function () {
    if (click2) {
      prev();
      click2 = !click2;
      setTimeout(function () {
        click2 = true;
      }, 1000);
    }
  });
});
