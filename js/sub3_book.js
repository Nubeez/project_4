$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "아버지의 해방일지", size: 1},
    //키값
    headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
  }).done(function (msg) {
    $(".aaa").prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
    $(".box_num").append("<p>" + msg.documents[0].title + "<p/>");
    $(".box_num").append("<p>" + "2022.11.02" + "</p>");
    $(".box_num").append("<span>" + "무료" + "</ㄴ>");

    $(".box_num2").append("<p>" + msg.documents[0].title + "<p/>");
    $(".box_num2").append("<p>" + "2022.11.02" + "</p>");
  });

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

  $(".tab_group_menu").click(function () {
    var sub_tab_id = $(this).attr("data-tab");

    $(".tab_group_menu").removeClass("plus_bg_black");
    $(".boxs").addClass("hides");

    $(this).addClass("plus_bg_black");
    $("#" + sub_tab_id).removeClass("hides");
  });

  $(".bk_group:nth-of-type(1)").click(function () {
    $(".boxs").removeClass("hides");
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
