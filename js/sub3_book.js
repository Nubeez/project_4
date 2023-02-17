$(function () {
  $(".good_icon_2").on("click", function () {
    let attrurl = $(".good_icon_2").attr("src");
    if (attrurl == "img/details_book/alarm_active.svg") {
      $(".good_icon_2").attr("src", "img/details_book/alarm.svg");
    } else {
      $(".good_icon_2").attr("src", "img/details_book/alarm_active.svg");
    }
  });

  $(".bk_view_good1").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".bk_view_good2").addClass("active");
    }
  });
  $(".good_icon_1").on("click", function () {
    if ($(".bk_view_good2").hasClass("active")) {
      $(".bk_view_good2").removeClass("active");
      $(".bk_view_good1").addClass("active");
    }
  });
});
