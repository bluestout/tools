/**
 * This function is for developing puposes, its a synthetic event system
 * to allow me to call jQuery functions or other functions after
 * render.js function has rendered the HTML.
 */
(function (window, document) {
  "use strict";

  function isEmpty(string) {
    return !string;
  }

  function isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  }

  function log() {
    var message = Array.prototype.slice.call(arguments).join(" ");
    console.log(message);
    return message;
  }

  window.syntheticEvent = (function () {

    var eventList = {};

    return {
      on: function (name, func) {
        if (isEmpty(name)) throw(log("Error", "No Event Name defined!"));
        if (isEmpty(func)) throw(log("Error", "No Function defined!"));
        if (!isArray(eventList[name])) eventList[name] = [];
        return eventList[name].push(func);
      },
      off: function (name, func) {
        var index = eventList[name].indexOf(func);

        if (index > -1) {
          return eventList[name].splice(index, 1);
        }
      },
      once: function (name, func) {
        var that = this;
        var once = function (data) {
          that.off(name, once);
          return func(data);
        };
        return this.on(name, once);
      },
      emit: function (name, data) {
        return eventList[name] && eventList[name].forEach(function (fn) {
          return fn(data || null);
        });
      }
    };
  }());

}(window, document));
