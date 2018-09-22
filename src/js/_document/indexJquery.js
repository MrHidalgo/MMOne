

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
  function initSelect(selector) {
    if (selector === undefined) {
      var selector = 'select';
    }

    selectReset(selector);

    $(selector).on('change', function () {
      selectReset(this);
    });
  }

  function selectReset(selector){
    if (selector === undefined) {
      var selector = 'select';
    }

    $(selector).each(function(){
      var valOption = $(this).children('option:selected');
      $(this).prev('span').html(valOption.text());
    });
  }


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
    initSelect();
  };
  initJquery();
});

