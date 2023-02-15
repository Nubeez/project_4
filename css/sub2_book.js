$(function () {
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
  //   $(".bk_group").click(function () {
  //     var bkidx = $(this).index();
  //     console.log(bkidx);
  //     $(".bk_group")
  //       .eq(bkidx)
  //       .click(function () {
  //         $.ajax({
  //           method: "GET",
  //           url: "https://dapi.kakao.com/v3/search/book?target=title",
  //           data: {query: search[0], size: 50},
  //           async: false,
  //           headers: {Authorization: "KakaoAK e324f5a360b2c811615c99a6e26fcc9e"},
  //         }).done(function (books) {
  //           var bk = $(".box" + i);

  //           for (j = 0; j < bk.length; j++) {
  //             $(".box" + i)
  //               .eq(j)
  //               .append("<img src='" + books.documents[j].thumbnail + "'/>");

  //             $(".bk_volume").text(bk.length);

  //             var str = books.documents[j].title;
  //             // var aut = books.documents[j].authors;
  //             var str1 = str.substring(0, 14);
  //             // var str2 = aut.substring(0, 30);
  //             $(".box" + i)
  //               .eq(j)
  //               .append("<h5 class='bk_1'>" + str1 + "</h5>");
  //             $(".box" + i)
  //               .eq(j)
  //               .append("<span class='bk_1'>" + books.documents[j].authors + "</span>");
  //           }
  //         });
  //       });
  //   });
});
