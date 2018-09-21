

/**
 * @description Document DOM ready.
 */
(function() {
  /**
   * =============================================
   * CALLBACK
   * =============================================
   */
  const langBtn = () => {
    const elem = document.querySelectorAll("[lang-js]");

    for(var btn of elem) {
      btn.addEventListener('click', (ev) => {
        const _this = ev.currentTarget,
          current = document.getElementsByClassName("is-active");

        current[0].className = current[0].className.replace(" is-active", "");
        _this.className += " is-active";
      });
    }
  };



  /**
   * @description Init all method
   */
  const initNative = () => {
    // default
    initPreventBehavior();
    // lib
    // callback
    langBtn();
  };
  initNative();
})();
