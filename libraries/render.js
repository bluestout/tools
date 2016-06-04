/**
 * Module Bootstrap Code.
 *
 * @author Sadi Qevani
 */

/**
 * This render file, is a simple render engine to allow
 * ease development with the platform so i can reuse html
 * and have DRY code.
 */
(function (window, document, $) {
  "use strict";

  return window.render = function (config, cb) {
    var url      = config.url + config.name + ".html";
    var selector = config.selector;

    return $.get(url , function (data) {
      $(selector).replaceWith(data);
      if (cb) return cb(data);
      syntheticEvent.emit("rendered", data);
    });
  };

}(window, document, jQuery));
