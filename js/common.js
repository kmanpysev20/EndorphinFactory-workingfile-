//header event total

$(document).ready(function(){
    $('body').on('click', function(e) {
        let $tgPoint = $(e.target);
        
        //header lnag-btn click event
        let $btnlang = $tgPoint.hasClass('btn-lang'); 
        let $langlist = $tgPoint.hasClass('lang-list'); 
        if( $btnlang ) {
            $('.btn-lang').toggleClass('is-open');
            $('.lang-list').toggleClass('is-open');
        } 
        else if( !$btnlang && !$langlist ) {
            $('.btn-lang').removeClass('is-open');
            $('.lang-list').removeClass('is-open');
        }

        //header sns-link-btn click event
        let $snslinkbtn = $tgPoint.hasClass('sns-link-btn'); 
        let $linklist = $tgPoint.hasClass('link-list'); 
        if( $snslinkbtn ) {
            $('.sns-link-btn').toggleClass('is-open');
            $('.link-list').toggleClass('is-open');
        } 
        else if( !$snslinkbtn && !$linklist ) {
            $('.sns-link-btn').removeClass('is-open');
            $('.link-list').removeClass('is-open');
        }

        //header rightside-bottom click evnet
        let $menuefbtn = $tgPoint.hasClass('menu-ef-btn'); 
        let $eflist = $tgPoint.hasClass('ef-list');
        if( $menuefbtn ) {
            $('.menu-ef-btn').toggleClass('is-open');
            $('.ef-list').toggleClass('is-open');
        } 
        else if( !$menuefbtn && !$eflist ) {
            $('.menu-ef-btn').removeClass('is-open');
            $('.ef-list').removeClass('is-open');
        }
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
    $('.ef-list').on('click', function() {
        $('.main-header').removeClass('is-gnb');
        $('#gnb').removeClass('is-gnb');
    });
});

//news even & odd check btn
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
// $(function() {
//     //?????? datepicker??? ?????? ?????? ?????? ??????
//     $.datepicker.setDefaults({
//         closeText: '??????',
//         prevText: '?????????',
//         nextText: '?????????',
//         // currentText: '??????',
//         monthNames: ['1???(JAN)','2???(FEB)','3???(MAR)','4???(APR)','5???(MAY)','6???(JUN)',
//         '7???(JUL)','8???(AUG)','9???(SEP)','10???(OCT)','11???(NOV)','12???(DEC)'],
//         monthNamesShort: ['1???','2???','3???','4???','5???','6???',
//         '7???','8???','9???','10???','11???','12???'],
//         dayNames: ['???','???','???','???','???','???','???'],
//         dayNamesShort: ['???','???','???','???','???','???','???'],
//         dayNamesMin: ['???','???','???','???','???','???','???'],
//         weekHeader: 'Wk',
//         dateFormat: 'yy-mm-dd',
//         firstDay: 0,
//         isRTL: false,
//         showMonthAfterYear: true,
//         yearSuffix: '',
//         showOn: 'both',
//         buttonText: "??????",
//         changeMonth: true,
//         changeYear: true,
//         // showButtonPanel: true,
//         yearRange: 'c-99:c+99',
//         buttonImage: "../img/ic_calendar.png" ,
//     });

//     //input??? datepicker??? ??????
//     $("#sdate").datepicker();                    
//     $("#edate").datepicker();
    
//     //From??? ???????????? ?????? ????????? ??????
//     $('#sdate').datepicker('setDate', 'today'); 
//     //To??? ???????????? ????????? ??????
//     $('#edate').datepicker('setDate', 'today');

//     $.datepicker.setDefaults($.datepicker.regional['ko']);
//     $('#edate').datepicker("option", "minDate", $("#sdate").val());
//     $('#edate').datepicker("option", "onClose", function ( selectedDate ) 
//     {
//         $("#sdate").datepicker( "option", "maxDate", selectedDate );
//     });
// });

//fullpage evnet
//   $(document).ready(function() {
//     $('#fullpage').fullpage({
//         verticalCentered: true,
//         normalScrollElements: '.news-inner',
//     });
// });