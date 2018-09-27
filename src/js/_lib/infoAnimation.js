

/**
 * @name initMainInfoAnimation
 * @description
 */
const initMainInfoAnimation = (countVal) => {
  const sliderBtnLeft = $("[slider-left-js]"),
    sliderBtnRight = $("[slider-right-js]"),
    blockSlider = $(".main__info-block");

  if($(window).width() > 767) {
    blockSlider.removeAttr("style");

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

    sliderBtnLeft.unbind('click');
    sliderBtnRight.unbind('click');
  } else {
    let countBlockSlider = blockSlider.length,
      mainCount = 1 || countVal;

    sliderBtnLeft.on('click', (ev) => {
      const elem = $(ev.currentTarget);

      if(elem.hasClass("is-disabled")) {
        return;
      }

      if(mainCount >= 0 && mainCount < countBlockSlider) {
        blockSlider.hide();
        blockSlider.eq(mainCount).show();
        mainCount--;
      }

      sliderBtnRight.removeClass("is-disabled");

      if (mainCount < 0) {
        elem.addClass("is-disabled");
        mainCount = 1;
      }
    });
    sliderBtnRight.on('click', (ev) => {
      const elem = $(ev.currentTarget);

      if(elem.hasClass("is-disabled")) {
        return;
      }

      if(mainCount > 0 && mainCount < countBlockSlider) {
        blockSlider.hide();
        blockSlider.eq(mainCount).show();
        mainCount++;
      }

      sliderBtnLeft.removeClass("is-disabled");

      if (mainCount > 2) {
        elem.addClass("is-disabled");
        mainCount -= 2;
      }
    });
  }
};