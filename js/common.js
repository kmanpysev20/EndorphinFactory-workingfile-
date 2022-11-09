//header lnag-btn click event
$(document).ready(function(){
    $('body').on('click', function(e) {
        let $tgPoint = $(e.target);
        let $btnlang = $tgPoint.hasClass('btn-lang'); 
        let $langlist = $tgPoint.hasClass('lang-list'); 
        if( $btnlang ) {
            $('.btn-lang').toggleClass('is-open');
            $('.lang-list').toggleClass('is-open');
        } 
        if( !$btnlang && !$langlist ) {
            $('.btn-lang').removeClass('is-open');
            $('.lang-list').removeClass('is-open');
        }
        //console.log($tgPoint);
    });
    //header sns-link-btn click event
    $('body').on('click', function(e) {
        let $tgPoint = $(e.target);
        let $snslinkbtn = $tgPoint.hasClass('sns-link-btn'); 
        let $linklist = $tgPoint.hasClass('link-list'); 
        if( $snslinkbtn ) {
            $('.sns-link-btn').toggleClass('is-open');
            $('.link-list').toggleClass('is-open');
        } 
        if( !$snslinkbtn && !$linklist ) {
            $('.sns-link-btn').removeClass('is-open');
            $('.link-list').removeClass('is-open');
        }
        //console.log($tgPoint);
    });

    //header rightside-bottom click evnet
    $('body').on('click', function(e) {
        let $tgPoint = $(e.target);
        let $menuefbtn = $tgPoint.hasClass('menu-ef-btn'); 
        let $eflist = $tgPoint.hasClass('ef-list');
        if( $menuefbtn ) {
            $('.menu-ef-btn').toggleClass('is-open');
            $('.ef-list').toggleClass('is-open');
        } 
        if( !$menuefbtn && !$eflist ) {
            $('.menu-ef-btn').removeClass('is-open');
            $('.ef-list').removeClass('is-open');
        }
        // console.log($tgPoint);
    });

    //gnb menu click event
    $('.btn-gnb').on('click', function() {
        $('.main-header').toggleClass('is-gnb');
        $('#gnb').toggleClass('is-gnb');
    });
    $('.ic-gnb-close').on('click', function() {
        $('.main-header').removeClass('is-gnb');
        $('#gnb').removeClass('is-gnb');
    });
    //gnb inner click event
    $('#gnb-first').on('click', function() {
        $('.gnb-ef-list').toggleClass('is-open');
    });
});

//news even & odd event
$(document).ready(function(){
    $('.news-list:odd').toggleClass('is-odd');
    $('.news-list:even').toggleClass('is-even');
    let isodd = $('.is-odd').length;
    let iseven = $('.is-even').length;
    let sum = isodd+iseven;
    console.log(sum);
    if(sum % 2 == 1) {
        $('.news-more-btn').toggleClass('is-odd');
    } else {
        $('.news-more-btn').removeClass('is-odd');
    }
});

//top button click event
// function btnTop() {
//     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
// }

//datepicker event
$(function() {
    //모든 datepicker에 대한 공통 옵션 설정
    $.datepicker.setDefaults({
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        // currentText: '오늘',
        monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
        '7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '',
        showOn: 'both',
        buttonText: "달력",
        changeMonth: true,
        changeYear: true,
        // showButtonPanel: true,
        yearRange: 'c-99:c+99',
        buttonImage: "../img/ic_calendar.png" ,
    });

    //input을 datepicker로 선언
    $("#sdate").datepicker();                    
    $("#edate").datepicker();
    
    //From의 초기값을 오늘 날짜로 설정
    $('#sdate').datepicker('setDate', 'today'); 
    //To의 초기값을 내일로 설정
    $('#edate').datepicker('setDate', 'today');

    $.datepicker.setDefaults($.datepicker.regional['ko']);
    $('#edate').datepicker("option", "minDate", $("#sdate").val());
    $('#edate').datepicker("option", "onClose", function ( selectedDate ) 
    {
        $("#sdate").datepicker( "option", "maxDate", selectedDate );
    });
});

//fullpage evnet
//   $(document).ready(function() {
//     $('#fullpage').fullpage({
//         verticalCentered: true,
//         normalScrollElements: '.news-inner',
//     });
// });


//artist-card click event
$(document).ready(function(){
    $('.thumb').on('click',function(){
        $('.card-toggle').fadeIn();
        });
    $('.card-toggle').on('click',function(){
        $('.card-toggle').fadeOut();
        });
});
