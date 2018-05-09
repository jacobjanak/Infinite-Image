$(function() {

  let i; // for looping
  let imgCount = 1; // keeps track of imgs on page
  const imgWidth = $('#landscape').width(); // width of each img

  // returns true if number is even or false if odd
  const isEven = num => num % 2 === 0;

  // adds imgs and flipped imgs to DOM as necessary
  const remakeHeader = () => {

    // get current width of the browser
    const browserWidth = $(document).width();

    // if browser is bigger than one img
    if (browserWidth > imgWidth) {

      // how many times will we need to add a new image
      const times = Math.floor(browserWidth / imgWidth) - imgCount;

      for (i = 0; i < times; i++) {

        // create a new image which may be flipped
        let $img = $('<img>');
        $img.attr('src', 'http://www.hdwallpaperup.com/wp-content/uploads/2015/01/Snowy-Forest-Reflection.jpg')
        if (isEven(i)) $img.addClass('flipped');

        // add to DOM and update number of imgs
        $('header').append($img)
        imgCount++
      }
    }
  }

  // call function on initial page load
  remakeHeader()

  // also call function whenever the browser gets resized
  $(window).on('resize', remakeHeader)

})
