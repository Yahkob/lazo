/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['common/utils/loader.js']) {
  _$jscoverage['common/utils/loader.js'] = [];
  _$jscoverage['common/utils/loader.js'][1] = 0;
  _$jscoverage['common/utils/loader.js'][3] = 0;
  _$jscoverage['common/utils/loader.js'][5] = 0;
  _$jscoverage['common/utils/loader.js'][6] = 0;
  _$jscoverage['common/utils/loader.js'][7] = 0;
  _$jscoverage['common/utils/loader.js'][10] = 0;
  _$jscoverage['common/utils/loader.js'][11] = 0;
  _$jscoverage['common/utils/loader.js'][14] = 0;
  _$jscoverage['common/utils/loader.js'][15] = 0;
  _$jscoverage['common/utils/loader.js'][16] = 0;
  _$jscoverage['common/utils/loader.js'][17] = 0;
  _$jscoverage['common/utils/loader.js'][19] = 0;
  _$jscoverage['common/utils/loader.js'][22] = 0;
  _$jscoverage['common/utils/loader.js'][26] = 0;
  _$jscoverage['common/utils/loader.js'][30] = 0;
  _$jscoverage['common/utils/loader.js'][34] = 0;
  _$jscoverage['common/utils/loader.js'][37] = 0;
  _$jscoverage['common/utils/loader.js'][41] = 0;
  _$jscoverage['common/utils/loader.js'][42] = 0;
}
_$jscoverage['common/utils/loader.js'].source = ["define(['underscore'], function (_) {","","    'use strict';","","    return function (cmpName, options) {","        if (typeof cmpName !== 'string') { // TODO: better error handling??? just prints the stack to the screen","            return onError(new Error('The parameter \"cmpName\" must be a string'));","        }","","        function onError(error) {","            _.delay(options.error, 0, error);","        }","","        function onCtlLoad(controller) {","            try { // REMOVED: assets.app &amp; assets.component appeared to be undefined always in the previous life cycle","                _.extend(controller.ctx, { /*app: { assets: assets.app }, assets: assets.component*/ });","                controller._execute(options.action, {","                    success: function (controller) {","                        _.delay(options.success, 0, controller);","                    },","                    error: function (err) {","                        return onError(err);","                    }","                });","            } catch (error) {","                return onError(error);","            }","        }","","        options = _.defaults(options || {}, {","            action: 'index',","            name: cmpName,","            error: function () {","                return;","            },","            success: function () {","                return;","        }});","","        // loader is used by ctl.addChild; requirring at run time prevents the circular dependency","        LAZO.require(['lazoCtl'], function (Ctl) {","            Ctl.create(cmpName, _.pick(options, 'ctx', 'name'), {","                success: onCtlLoad,","                error: onError","            });","        });","    };","","});"];
_$jscoverage['common/utils/loader.js'][1]++;
define(["underscore"], (function (_) {
  _$jscoverage['common/utils/loader.js'][3]++;
  "use strict";
  _$jscoverage['common/utils/loader.js'][5]++;
  return (function (cmpName, options) {
  _$jscoverage['common/utils/loader.js'][6]++;
  if (((typeof cmpName) !== "string")) {
    _$jscoverage['common/utils/loader.js'][7]++;
    return onError(new Error("The parameter \"cmpName\" must be a string"));
  }
  _$jscoverage['common/utils/loader.js'][10]++;
  function onError(error) {
    _$jscoverage['common/utils/loader.js'][11]++;
    _.delay(options.error, 0, error);
}
  _$jscoverage['common/utils/loader.js'][14]++;
  function onCtlLoad(controller) {
    _$jscoverage['common/utils/loader.js'][15]++;
    try {
      _$jscoverage['common/utils/loader.js'][16]++;
      _.extend(controller.ctx, {});
      _$jscoverage['common/utils/loader.js'][17]++;
      controller._execute(options.action, {success: (function (controller) {
  _$jscoverage['common/utils/loader.js'][19]++;
  _.delay(options.success, 0, controller);
}), error: (function (err) {
  _$jscoverage['common/utils/loader.js'][22]++;
  return onError(err);
})});
    }
    catch (error) {
      _$jscoverage['common/utils/loader.js'][26]++;
      return onError(error);
    }
}
  _$jscoverage['common/utils/loader.js'][30]++;
  options = _.defaults((options || {}), {action: "index", name: cmpName, error: (function () {
  _$jscoverage['common/utils/loader.js'][34]++;
  return;
}), success: (function () {
  _$jscoverage['common/utils/loader.js'][37]++;
  return;
})});
  _$jscoverage['common/utils/loader.js'][41]++;
  LAZO.require(["lazoCtl"], (function (Ctl) {
  _$jscoverage['common/utils/loader.js'][42]++;
  Ctl.create(cmpName, _.pick(options, "ctx", "name"), {success: onCtlLoad, error: onError});
}));
});
}));
