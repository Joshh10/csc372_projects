$(function () {
    $(document).on("click", ".back-btn", function () {
        $(".hero").fadeOut(100, function () {
            $(this).css("background-image", "url('../images/lights.jpg')").fadeIn(1000);
        });
    });

    $(document).on("click", ".form-group", function () {
        alert('Form has been submitted!');
    });

    
  

    $(".main-heading").hide().slideDown(2000);

    $(".gallery-header").hide().fadeIn(2000);

    $('.gallery-section').hide().fadeIn(2000);


});
