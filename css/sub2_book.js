$(function () {
  $(".bk_group").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".bk_group").removeClass("bk_activebox");
    $(".boxs").addClass("hides");

    $(this).addClass("bk_activebox");
    $("#" + tab_id).removeClass("hides");
  });
  for (b = 0; b < 50; b++) {
    $(".boxs").append("<div class='box0 box'>" + "</div>");
  }
  var search;
  search = ["소설", "실용", "만화"];

  for (i = 0; i < search.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: {query: search[i], size: 50},
      async: false,
      headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
    }).done(function (books) {
      let boxs = $(".box");
      let bk = $(".box" + i);

      for (j = 0; j < bk.length; j++) {
        $(".box" + i)
          .eq(j)
          .append("<img src='" + books.documents[j].thumbnail + "'/>");

        $(".bk_volume").text(boxs.length);

        var str = books.documents[j].title;
        var str1 = str.substring(0, 14);
        $(".box" + i)
          .eq(j)
          .append("<h5 class='bk_1'>" + str1 + "</h5>");
        $(".box" + i)
          .eq(j)
          .append("<span class='bk_1'>" + books.documents[j].authors + "</span>");
      }
    });
  }
  $(".bk_group").click(function () {
    var bkidx = $(this).index();
    console.log(bkidx);
  });

  search = ["", "소설", "실용", "만화"];
  for (i = 0; i < search.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: {query: search[bkidx], size: 50},
      async: false,
      headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
    }).done(function (books) {
      var bk = $(".box" + i);

      for (j = 0; j < bk.length; j++) {
        $(".box" + i)
          .eq(j)
          .append("<img src='" + books.documents[j].thumbnail + "'/>");

        $(".bk_volume").text(bk.length);

        var str = books.documents[j].title;
        // var aut = books.documents[j].authors;
        var str1 = str.substring(0, 14);
        // var str2 = aut.substring(0, 30);
        $(".box" + i)
          .eq(j)
          .append("<h5 class='bk_1'>" + str1 + "</h5>");
        $(".box" + i)
          .eq(j)
          .append("<span class='bk_1'>" + books.documents[j].authors + "</span>");
      }
    });
  }
});
