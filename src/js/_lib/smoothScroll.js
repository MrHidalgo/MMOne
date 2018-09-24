

/**
 * @name initSmoothScroll
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (btnName = "[anchor-js]", animateSpeed = 1000) => {

  $(btnName).on("click", (e) => {
    e.preventDefault();

    let linkHref = $(e.currentTarget).attr('href'),
      headerHeight = $(".header").outerHeight() || 0;

    if(linkHref.indexOf(".html") !== -1) {
      window.location.href = linkHref;
    } else if (window.location.href.indexOf("jobs") !==  -1 && $(e.currentTarget).hasClass("nav__link")) {
      window.location.href = "/";
    }

    let topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);

    $("html, body").removeClass("is-hideScroll");
    $("[hamburger-js]").removeClass("is-active");
    $("[mobile-block-js]").removeClass("is-open");
  });

};