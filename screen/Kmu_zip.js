document.addEventListener('DOMContentLoaded', function() {

    // bottom_button
    var link_home = document.getElementById("bot_btn_1");
    var link_ctl = document.getElementById("bot_btn_2");
    var link_edward = document.getElementById("bot_btn_3");

    var link_storyplus = document.getElementById("bot_btn_4");
    var link_sugang = document.getElementById("bot_btn_5");
    var link_k6 = document.getElementById("bot_btn_6");

    var link_library = document.getElementById("bot_btn_7");
    var link_everytime = document.getElementById("bot_btn_8");

    link_home.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://www.kmu.ac.kr/uni/main/main.jsp`
        });
    });
    link_ctl.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://ctl.kmu.ac.kr/index.jsp`
        });
    });
    link_edward.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://sso.kmu.ac.kr/kmusso/ext/edward/login_form.do?Return_Url=https://edward.kmu.ac.kr/com/SsoCtr/sso_login.do?redirectUrl=https://portal.kmu.ac.kr/proc/Login.do`
        });
    });


    link_storyplus.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://story.kmu.ac.kr/main.do`
        });
    });
    link_sugang.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://sugang.kmu.ac.kr/servlet/Fip`
        });
    });
    link_k6.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://newcms.kmu.ac.kr/it/48569/subview.do`
        });
    });


    link_library.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://library.kmu.ac.kr/`
        });
    });
    link_everytime.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://everytime.kr/`
        });
    });

    // top_button
    var link_notice = document.getElementById("top_btn_1");
    var link_calender = document.getElementById("top_btn_2");
    var link_college_info = document.getElementById("top_btn_3");
    var link_diet = document.getElementById("top_btn_4");
    var link_rendingroom = document.getElementById("top_btn_5");

    link_notice.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://www.kmu.ac.kr/uni/main/page.jsp?mnu_uid=143`
        });
    });
    link_calender.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://www.kmu.ac.kr/uni/main/page.jsp?mnu_uid=3373&`
        });
    });
    link_college_info.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://www.academyinfo.go.kr/popup/pubinfo1690/list.do?schlId=0000068`
        });
    });
    link_diet.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://newcms.kmu.ac.kr/dorm/1873/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGZG9ybSUyRjQ1MCUyRmFydGNsTGlzdC5kbyUzRg%3D%3D`
        });
    });
    link_rendingroom.addEventListener("click", function() {     
        chrome.tabs.create({
            url: `https://clicker.kmu.ac.kr/clicker/UserSeat/`
        });
    });
})