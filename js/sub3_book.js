$(function () {
  // 홈 탭 도서 api
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "아버지의 해방일지", size: 1},
    //키값
    headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
  }).done(function (msg) {
    $(".aaa").prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
    $(".bk_img1").prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
    $(".box_num").append("<p>" + " [체험판] " + msg.documents[0].title + "<p/>");
    $(".box_num").append("<p>" + "2022.11.02" + "</p>");
    $(".box_num").append("<span>" + "무료" + "</ㄴ>");

    $(".box_num2").append("<p>" + msg.documents[0].title + "<p/>");
    $(".box_num2").append("<p>" + "2022.11.02" + "</p>");
    $(".bk_writer_group").append("<span>" + msg.documents[0].authors + "<span/>");
    $(".bk_info_group").append("<span>" + msg.documents[0].price + "원/권 당<span/>" + "<br/>");
    $(".bk_info_group2").append("<span>" + msg.documents[0].publisher + "<span/>");
  });
  // 작품소개 get 방식 불러오기
  $.get("./txt/bk_contents.txt", function (data) {
    $("#bk_txt_Box").html(data);
  });

  // 왼쪽 상단 하트 클릭 시 이미지 변경
  $(".good_icon_2").on("click", function () {
    let attrurl = $(".good_icon_2").attr("src");
    if (attrurl == "img/details_book/alarm_active.svg") {
      $(".good_icon_2").attr("src", "img/details_book/alarm.svg");
    } else {
      $(".good_icon_2").attr("src", "img/details_book/alarm_active.svg");
    }
  });

  // 최신순 클릭 시 팝업창
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

  // 팝업창
  $(".bk_group:nth-of-type(1)").click(function () {
    $(".boxs").removeClass("hides");
  });

  // 탭버튼1
  $(".tab_group_menu").click(function () {
    var sub_tab_id = $(this).attr("data-tab");

    $(".tab_group_menu").removeClass("plus_bg_black");
    $(".tab_home").addClass("tab_hide");

    $(this).addClass("plus_bg_black");
    $("#" + sub_tab_id).removeClass("tab_hide");
  });

  // 탭버튼2
  $(".tab_group_menu2").click(function () {
    var sub_tab_id2 = $(this).attr("data-tab");

    $(".tab_group_menu2").removeClass("plus_bg_black");
    $(".bk_Comments_wrap").addClass("tab_hide");

    $(this).addClass("plus_bg_black");
    $("#" + sub_tab_id2).removeClass("tab_hide");
  });

  //탭클릭 시 서브3 페이지 일부 display-none,크기조절
  $(".tab_group_menu:nth-of-type(1)").click(function () {
    $(".bk_breakdown").removeClass("tab_hide");
    $(".bk_breakdown2").addClass("tab_hide");
    $(".details_box_tab").removeClass("height_auto");
    $(".details_box_tab").removeClass("height_auto2");
    $(".details_box_tab2").removeClass("tab_hide");
    $(".details_box_tab3").removeClass("tab_hide");
    $(".details_box_tab4").removeClass("tab_hide");
  });
  $(".tab_group_menu:nth-of-type(2)").click(function () {
    $(".bk_breakdown").addClass("tab_hide");
    $(".bk_breakdown2").removeClass("tab_hide");
    $(".details_box_tab").addClass("height_auto2");
    $(".details_box_tab2").addClass("tab_hide");
    $(".details_box_tab3").addClass("tab_hide");
    $(".details_box_tab4").addClass("tab_hide");
  });

  $(".tab_group_menu:nth-of-type(3)").click(function () {
    $(".bk_breakdown").addClass("tab_hide");
    $(".bk_breakdown2").addClass("tab_hide");
    $(".details_box_tab").addClass("height_auto");
    $(".details_box_tab").removeClass("height_auto2");
    $(".details_box_tab2").addClass("tab_hide");
    $(".details_box_tab3").addClass("tab_hide");
    $(".details_box_tab4").addClass("tab_hide");
  });

  // 플러그인
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 중간 슬라이드 도서 api
  var search;
  search = ["소설", "레벨"];

  for (i = 0; i < search.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: {query: search[i], size: 13},
      async: false,
      headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
    }).done(function (books) {
      let bk = $(".box" + i);

      for (j = 0; j < bk.length; j++) {
        $(".box" + i)
          .eq(j)
          .append("<img src='" + books.documents[j].thumbnail + "'/>");

        var str = books.documents[j].title;
        var str1 = str.substring(0, 14);

        var title_min = books.documents[j].authors[0];

        $(".box" + i)
          .eq(j)
          .append("<h5 class='bk_1'>" + str1 + "</h5>");
        $(".box" + i)
          .eq(j)
          .append("<span class='bk_1'>" + title_min + "</span>");
      }
    });
  }
});
