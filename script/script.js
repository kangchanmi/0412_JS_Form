$(function () {

    $("input[type=button]").click(function () {

        var pw = $("#pw").val().trim();
        var pwRE = $("#pwRE").val().trim();
        // 같지 않다
        if (pw != pwRE) {
            alert("비밀번호가 다릅니다.");
        } else {
            // form 실행
            $("form").submit();
        }

    });


    $("#chkbox").click(function () {
        var chked = $(this).prop("checked");

        if (chked == true) {
            $("input.pw").attr("type", "text");
        } else {
            $("input.pw").attr("type", "password");
        }
    });


    /* 출생년도 입력하기 select 옵션 시작 */

    var now = new Date();
    var nowYear = now.getFullYear(); // 현재년도 = startYear
    var startYear = nowYear; // 2021년, nowYear = startYear      (now.getFullYear();)
    var endYear = 1930;


    var txtYear = "<option>년도</option>";


    //  2021년부터 시작이니 -1이 되어야 하므로 i-- .
    for (var i = startYear; i >= 1930; i--) {   // for (변수명; 조건식; 증감식)
        //        document.write(i + "<br>");
        // 처음 실행 -> i 값이 2021
        txtYear += "<option>" + i + "</option>"; // 1929만 남으면 안되므로  누적시키기
        // 2회 순환 -> i 값이 2020
        // ...
        // 마지막 순환 => i 값이 1929

    }
    $("#birthYear").html(txtYear);

    /* 출생년도 입력하기 select 옵션 끝 */


});
