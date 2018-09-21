

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


  const initClientsBullets = () => {
    $("[bullets-js]").on('click', (ev) => {
      const elem = $(ev.currentTarget),
        elemId = elem.data("id");

      $("[bullets-js]").removeClass("is-active");
      elem.addClass("is-active");

      $(".clients__block").fadeOut(300);
      $(".clients__block-" + elemId).fadeIn(300);
    });
  };


  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initPreventBehavior();
    // lib
    initSmoothScroll(".anchor-js");
    // callback
    initChangeActiveClass("[lang-js]");
    initChangeActiveClass("[nav-js]");
    initClientsBullets();
  };
  initJquery();
});

