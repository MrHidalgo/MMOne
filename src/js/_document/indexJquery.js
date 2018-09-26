

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
  $('body').on('click', function (e) {
    const className = ".main__info";

    if (!$(e.target).closest(className).length) {
      $(".main__info-box").removeClass("is-hide");
      $(".main__info-block").removeClass("is-show");
    }
  });


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

