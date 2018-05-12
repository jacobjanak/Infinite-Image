$(document).ready(function() {

  // GLOBAL VARIABLES
  let i, j; // for looping

  // UTILITIES
  const isEven = num => num % 2 === 0;

  // INFINITE IMAGE
  const infiniteImage = () => {
    const browserWidth = $(window).width();
    let isDone = true;

    // j will be used to keep track of index for .complete
    j = 0;

    // for each infinite image find how many more copies are needed
    $.each($('.infinite-image'), function() {
      if (document.getElementsByClassName('infinite-image')[j].complete) {
        const imgsNeeded = Math.ceil(browserWidth / $(this).width());
        const imgsExisting = $(this).siblings('.infinite-copy').length + 1;

        // create a copy
        for (i = imgsExisting + 1; i <= imgsNeeded; i++) {
          const $newImg = $('<img>');
          $newImg.addClass('infinite-copy')
          $newImg.attr('src', $(this).attr('src'))

          // flip every other image
          if (isEven(i)) $newImg.addClass('flipped');

          // add to DOM
          $(this).parent().append($newImg)
        }
      } else {
        isDone = false;
      }
      j++
    })
    return isDone;
  }

  // USAGE
  if (!infiniteImage()) {
    // if it didn't work the first time then wait for images to load
    const interval = setInterval(function() {
      const isDone = infiniteImage();
      if (infiniteImage()) { clearInterval(interval) };
    }, 50);
  }

  $(window).on('resize', infiniteImage)
})
