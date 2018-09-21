

/**
 * @name initSmoothScroll
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (btnName = "[anchor-js]", animateSpeed = 1000) => {

  $(btnName).on("click", (e) => {

    let linkHref = $(e.currentTarget).attr('href'),
      headerHeight = $(".header").outerHeight() || 0;

    if(linkHref === "#" || !$(linkHref).length > 0) {
      return true;
    }

    let topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);

  });

};