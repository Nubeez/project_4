$(function () {
  var search;
  search = ["소설", "영화", "서울,도쿄"];

  for (i = 0; i < search.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: {query: search[i], sort: "latest"},
      async: false,
      headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
    }).done(function (books) {
      var bk = $(".box" + i);

      for (j = 0; j < bk.length; j++) {
        $(".box" + i)
          .eq(j)
          .append("<img src='" + books.documents[j].thumbnail + "'/>");

        var str = books.documents[j].title;
        var str1 = str.substring(0, 30);

        $(".box" + i)
          .eq(j)
          .append("<p class=''>" + str1 + "</p>");
        $(".box" + i)
          .eq(j)
          .append("<span class=''>" + books.documents[j].authors + "</span>");
      }
    });
  }
});
