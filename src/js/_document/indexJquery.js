

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */

  /**
   *
   * @param classNameElem
   */
  const initChangeActiveClass = (classNameElem) => {
    $(classNameElem).on('click', (ev) => {
      const _this = $(ev.currentTarget);

      $(classNameElem).removeClass("is-active");
      _this.addClass("is-active");
    });
  };


  /**
   *
   */
  const initClientsBullets = () => {
    $("[bullets-js]").on('click', (ev) => {
      const elem = $(ev.currentTarget),
        elemId = elem.data("id");

      $("[bullets-js]").removeClass("is-active");
      elem.addClass("is-active");

      $(".clients__block").hide().removeClass("is-show");
      $(".clients__block-" + elemId).addClass("is-show");
    });
  };


  /**
   *
   */
  const selectReset = (selector) => {
    if (selector === undefined) {
      var selector = 'select';
    }

    $(selector).each(function(){
      var valOption = $(this).children('option:selected');

      if(valOption.val() > 0) {
        $(this).prev('span').addClass("is-choose");
      }

      $(this).prev('span').html(valOption.text());
    });
  };
  const initSelect = (selector) => {
    if (selector === undefined) {
      var selector = 'select';
    }

    selectReset(selector);

    $(selector).on('change', function () {
      selectReset(this);
    });
  };


  /**
   *
   */
  const initCollapse = () => {
    $("[collapse-head-js]").on('click', (ev) => {
      ev.preventDefault();

      const elem = $(ev.currentTarget),
        parentElem = elem.closest("[collapse-js]");


      if(elem.hasClass("is-active")) {
        elem.removeClass("is-active");
        parentElem.find("[collapse-body-js]").slideUp(300);
      } else {
        $("[collapse-head-js]").removeClass("is-active");
        $("[collapse-body-js]").slideUp(300);

        elem.addClass("is-active");
        parentElem.find("[collapse-body-js]").slideDown(300);
      }
    });
  };


  /**
   *
   */
  const initMainInfoAnimation = () => {
    const mainInfo = $(".main__info"),
      mainCoverContainer = $(".main__info-extra, .main__info-wrap"),
      infoAdditionalContainer = $(".main__info-extra"),
      infoBox = $(".main__info-box"),
      infoBlock = $(".main__info-block");

    mainCoverContainer.hover(
      (ev) => {
        infoAdditionalContainer.stop(true, false).delay(0).addClass("is-hover");
      }
    );
    infoBox.hover(
      (ev) => {
        const elem = $(ev.currentTarget),
          elemId = elem.data("hover"),
          infoBlock = $(".main__info-block").eq(elemId);

        elem.addClass("is-hide");
        infoBlock.stop(true, false).delay(0).addClass("is-show");
      }
    );
    mainCoverContainer.on("mouseleave", () => {
      infoAdditionalContainer.removeClass("is-hover");
    });
    infoBlock.on("mouseleave", (ev) => {
      infoBox.removeClass("is-hide");
      $(ev.currentTarget).removeClass("is-show");
    });

    // after load/ready page
    // ===============
    if(localStorage.getItem("animation") !== "1") {
      setTimeout((ev) => {
        mainInfo.addClass("is-start-animation");
      }, 1750);
      setTimeout((ev) => {
        mainInfo.removeClass("is-start-animation");
        localStorage.setItem('animation', "1");
      }, 3150);
    }
  };


  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initPreventBehavior();
    // lib
    initSmoothScroll(".anchor-js");
    initHamburger();
    // callback
    initChangeActiveClass("[lang-js]");
    initChangeActiveClass("[nav-js]");
    initClientsBullets();
    initSelect();
    initCollapse();
    initMainInfoAnimation();
  };
  initJquery();
});

