(function (window, document) {
  "use strict";

  var currentHash = window.location.hash;
  var currentBody = window.document.body;

  return window.router = function (map) {
    map[window.location.hash.substring(1) || "/"]();
    return setInterval(function () {
      if (currentHash !== window.location.hash) {
        window.location.reload(false);
        map[window.location.hash.substring(1) || "/"]();
        currentHash = window.location.hash;
      }
    }, 100);
  };
}(window, document));


(function (window, document) {
  "use strict";

  var routers = {};

  // Home Routers
  $.extend(routers, {
    "/": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      render({selector: "workspace", name: "workspace", url: "/core/pages/"});
    }
  });

  // Calendar Routers
  $.extend(routers, {
    "/calendar/1": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-1", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/calendar/2": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-2", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/calendar/3": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-3", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/calendar/4": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-4", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});

        $(".sidemodal").modal({
          backdrop: false,
          show: false
        });

      });
    },
    "/calendar/5": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-5", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});

        $(".sidemodal").modal({
          show: false
        })
      });
    },
    "/calendar/6": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-6", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/calendar/7": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-calendar-7", url: "/core/pages/calendar/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    }
  });

  // OnBoarding Routers
  $.extend(routers, {
    "/onboarding/1": function () {
      render({selector: "workspace", name: "cl-onboarding-1", url: "/core/pages/onboarding/"});
    },
    "/onboarding/2": function () {
      render({selector: "workspace", name: "cl-onboarding-2", url: "/core/pages/onboarding/"});
    },
    "/onboarding/3": function () {
      render({selector: "workspace", name: "cl-onboarding-3", url: "/core/pages/onboarding/"});
    },
    "/onboarding/4": function () {
      render({selector: "workspace", name: "cl-onboarding-4", url: "/core/pages/onboarding/"});
    },
    "/onboarding/5": function () {
      render({selector: "workspace", name: "cl-onboarding-5", url: "/core/pages/onboarding/"}, function () {
        $(function () {
          $('[data-toggle="tooltip"]').tooltip();
        })
      });
    },
    "/onboarding/6": function () {
      render({selector: "workspace", name: "cl-onboarding-6", url: "/core/pages/onboarding/"});
    }
  });

  // Plan Routers
  $.extend(routers, {
    "/plan/1": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-1", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/plan/2": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-2", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/plan/3": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-3", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/plan/4": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-4", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/plan/5": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-5", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/plan/6": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-6", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    },
    "/plan/7": function () {
      render({selector: "navigation", name: "navigation", url: "/core/layout/"});
      render({selector: "workspace", name: "cl-plan-7", url: "/core/pages/plan/"}, function () {
        render({selector: "searchbar", name: "searchbar", url: "/core/layout/"});
      });
    }
  });

  // Component Routers
  $.extend(routers, {
    "/components": function () {
      render({selector: "workspace", name: "components", url: "/core/pages/"});
    }
  });

  router(routers);
}(window, document));
