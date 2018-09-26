

/**
 * @name initMainInfoAnimation
 * @description
 */
const initMainInfoAnimation = () => {
  if($(window).width() > 767) {
    const mainInfo = $(".main__info"),
      infoBox = $(".main__info-box"),
      infoBlock = $(".main__info-block");

    infoBox.hover(
      (ev) => {
        const elem = $(ev.currentTarget),
          elemId = elem.data("hover"),
          infoBlock = $(".main__info-block").eq(elemId);

        if(is_touch_device()) {
          $(".main__info-box").removeClass("is-hide");
          $(".main__info-block").removeClass("is-show");
        }

        elem.addClass("is-hide");
        infoBlock.stop(true, false).delay(0).addClass("is-show");
      }
    );
    infoBlock.on("mouseleave", (ev) => {
      infoBox.removeClass("is-hide");
      $(ev.currentTarget).removeClass("is-show");
    });

    // after load/ready page
    // ===============
    setTimeout((ev) => {
      mainInfo.addClass("is-start-animation");
    }, 1400);
    setTimeout((ev) => {
      mainInfo.removeClass("is-start-animation");
      infoBox.addClass("is-default");
    }, 5500);

    function is_touch_device() {
      return 'ontouchstart' in window;
    }
  } else {

  }
};