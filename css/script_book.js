var search;
search = ["우주", "세계", "신비"];

for (i = 0; i < search.length; i++) {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: search[i]},
    headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
  }).done(function (books) {
    var bk = document.getElementsByClassName("box" + i);

    for (j = 0; j < bk.length; j++) {
      $(".box" + i)
        .eq(j)
        .append("<img src='" + books.documents[j].thumbnail + "'/>");
      $(".box" + i)
        .eq(j)
        .append("<h3>" + books.documents[j].title + "</h3>");
      $(".box" + i)
        .eq(j)
        .append("<h6>" + books.documents[j].authors + "</h6>");

      var str = books.documents[j].contents;
      var str2 = str.substring(0, 60);

      $(".box" + i)
        .eq(j)
        .append("<p>" + str2 + "</p>");
    }
  });
}
