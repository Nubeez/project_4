$(function () {
  var search;
  search = ["웹툰", "소설"];

  for (i = 0; i < search.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: {query: search[i], size: 30},
      async: false,
      headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
    }).done(function (books) {
      var bk = $(".box" + i);

      for (j = 0; j < bk.length; j++) {
        $(".box" + i)
          .eq(j)
          .append("<a href='#'>" + "<img src='" + books.documents[j].thumbnail + "'/>" + "</a>");
        var str = books.documents[j].title;
        var str1 = str.substring(0, 15);
        var num_tx = j + 1;

        $(".box_num")
          .eq(j)
          .append("<h2 class=''>" + num_tx + "</h2>" + "<br>");

        $(".box_num")
          .eq(j)
          .append("<p class=''>" + str1 + "</p>");

        $(".box_num")
          .eq(j)
          .append("<span class='sub_txt'>" + books.documents[j].authors + "</span>");
      }
    });
  }
});
