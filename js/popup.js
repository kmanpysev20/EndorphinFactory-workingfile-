// Popup Control
function popupControl() {
    $(".popup-open").on('click', function () {
        const popId = $(this).data('popup');
        $("#"+popId).css('display', 'flex').hide().fadeIn('fast');
        console.log(popId);
    });
    $(".pop-close-btn").on('click', function () {
        $(this).parents('.pop-wrap').fadeOut();
    });
};
popupControl();