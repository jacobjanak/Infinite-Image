$(function() {

  // GLOBAL VARIABLES
  let i, j; // for looping

  // UTILITIES
  const isEven = num => num % 2 === 0;

  // INFINITE IMAGE
  const infiniteImage = () => {
    const browserWidth = $(window).width();

    //
    $.each($('.infinite-image'), function() {
      const imgsNeeded = Math.ceil(browserWidth / $(this).width());
      const imgsExisting = $(this).siblings('.infinite-copy').length + 1;

      //
      for (i = imgsExisting + 1; i <= imgsNeeded; i++) {
        const $newImg = $('<img>');
        $newImg.addClass('infinite-copy')
        $newImg.attr('src', $(this).attr('src'))

        // flip every other image
        if (isEven(i)) $newImg.addClass('flipped');

        // add to DOM
        $(this).parent().append($newImg)
      }
    })
  }

  // USAGE
  infiniteImage()
  $(window).on('resize', infiniteImage)
})
