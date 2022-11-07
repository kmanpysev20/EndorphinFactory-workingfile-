// gallery popup
$(function () {
    $(".gallery-namebtn1 > a").click(function () {
        $("#galleryname").css('display', 'flex').hide().fadeIn();
    });
    $(".popup-btn-close").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#galleryname").fadeOut();
    }
});

//Factory shop item
$(function () {
    $(".fs-bp-list").click(function () {
        $("#fspopup").css('display', 'flex').hide().fadeIn();
    });
    $(".popup-btn-close").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#fspopup").fadeOut();
    }
});

//Factory shop totalview
$(function () {
    $(".total-btn-content").click(function () {
        $("#fspopup").css('display', 'flex').hide().fadeIn();
    });
    $(".popup-btn-close").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#fspopup").fadeOut();
    }
});

//mypage disconnect kaikas event
$(function () {
    $(".mypage-disconnect-btnwrap > .kaikas-btn").click(function () {
        $("#kaikaspop").css('display', 'flex').hide().fadeIn();
    });
    $(".pop-close-btn").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#kaikaspop").fadeOut();
    }
});

//mypage disconnect klip event
$(function () {
    $(".mypage-disconnect-btnwrap > .klip-btn").click(function () {
        $("#klippop").css('display', 'flex').hide().fadeIn();
    });
    $(".pop-close-btn").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#klippop").fadeOut();
    }
});