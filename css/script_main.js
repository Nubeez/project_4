$(function () {
  var pagenum = $(".slide_count b:first-of-type");
  var page = 1;
  // 슬라이드+ 슬라이드 텍스트
  pagenum.text(page);
  function prev() {
    $(".panel li:last").prependTo(".panel");
    $(".panel").css("margin-left", -950);
    $(".panel").stop().animate({marginLeft: 0}, 600);

    var txtidx = $(".panel").index();
    $(".slide_txt")
      .eq(txtidx)
      .removeClass("textoff")
      .parents("li")
      .siblings()
      .find(".slide_txt")
      .addClass("textoff");
    page--;
    if (page < 1) {
      page = 4;
    }
    pagenum.text(page);
  }

  function next() {
    $(".panel")
      .stop()
      .animate({marginLeft: -950}, function () {
        $(".panel li:first").appendTo(".panel");
        $(".panel").css({marginLeft: 0});

        var txtidx = $(".panel").index();
        $(".slide_txt")
          .eq(txtidx)
          .removeClass("textoff")
          .parents("li")
          .siblings()
          .find(".slide_txt")
          .addClass("textoff");
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
  // # 이동 제거
  $("a").click(function () {
    if ($(this).attr("href") == "#") {
      return false;
    }
  });
  // 클릭 시 라인추가
  $(".sh_lines").click(function () {
    $(this).addClass("sh_border_line").siblings().removeClass("sh_border_line");
  });
  // 클릭 시 shwrap 박스등장
  $("#Search_wrap input").click(function () {
    $("#shwrap").removeClass("offbox");
  });
  $(".sh_close").click(function () {
    $("#shwrap").addClass("offbox");
  });

  $(".sh_lines").click(function () {
    var idx = $(this).index();
    $(".tabbox").eq(idx).removeClass("offbox").siblings("div").addClass("offbox");
  });

  $(".click_popup").click(function () {
    $(".bk_popup_box_wrap").removeClass("box_none");
    $("body").addClass("stop-scrolling");
  });
  $(".popup_cancel").click(function () {
    $(".bk_popup_box_wrap").addClass("box_none");
    $("body").removeClass("stop-scrolling");
  });
});
