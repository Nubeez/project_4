$(function () {
  $(".bk_group").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".bk_group").removeClass("bk_activebox");
    $(".boxs").addClass("hides");

    $(this).addClass("bk_activebox");
    $("#" + tab_id).removeClass("hides");
  });

  $(".bk_group:nth-of-type(1)").click(function () {
    $(".boxs").removeClass("hides");
  });

  for (b = 0; b < 48; b++) {
    // $("#tab-1").append("<div class='box box'>" + "</div>");
    $("#tab-2").append("<div class='box0 box'>" + "</div>");
    $("#tab-3").append("<div class='box1 box'>" + "</div>");
    $("#tab-4").append("<div class='box2 box'>" + "</div>");
  }

  var search;
  search = ["소설", "실용", "문학"];

  for (i = 0; i < search.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: {query: search[i], size: 48, sort: "latest"},
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
        $(".box" + i)
          .eq(j)
          .append("<h5 class='bk_1'>" + str1 + "</h5>");
        $(".box" + i)
          .eq(j)
          .append("<span class='bk_1'>" + books.documents[j].authors + "</span>");

        $(".bk_volume").text(bk.length);
      }
    });
  }
});
