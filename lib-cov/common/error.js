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
if (! _$jscoverage['common/error.js']) {
  _$jscoverage['common/error.js'] = [];
  _$jscoverage['common/error.js'][1] = 0;
  _$jscoverage['common/error.js'][3] = 0;
  _$jscoverage['common/error.js'][5] = 0;
  _$jscoverage['common/error.js'][8] = 0;
  _$jscoverage['common/error.js'][9] = 0;
  _$jscoverage['common/error.js'][13] = 0;
  _$jscoverage['common/error.js'][14] = 0;
  _$jscoverage['common/error.js'][15] = 0;
  _$jscoverage['common/error.js'][18] = 0;
  _$jscoverage['common/error.js'][19] = 0;
  _$jscoverage['common/error.js'][20] = 0;
  _$jscoverage['common/error.js'][21] = 0;
  _$jscoverage['common/error.js'][22] = 0;
}
_$jscoverage['common/error.js'].source = ["define(function () {","","    'use strict';","","    return {","","        render: function (errObj, ctl) {","            LAZO.require(['text!' + errObj.code, 'utils/template', 'underscore'], function (errTemplate, template, _) {","                var templateEngine = template.getTemplateEngine('handlebars'),","                    compiledTemplate = templateEngine.compile(errTemplate),","                    view;","","                ctl = ctl || LAZO.ctl;","                view = ctl ? ctl.currentView : LAZO.ctl.currentView;","                ctl.children = {}; // remove children, so that renderer does not attempt to resolve them","","                // reset properties as this should be considered to be in an error state until the server replies with 200","                _.extend(view, errObj);","                view.templateEngine = 'handlebars';","                view._templateEngine = templateEngine;","                view.template = compiledTemplate;","                view.render();","            });","        }","","    };","","});"];
_$jscoverage['common/error.js'][1]++;
define((function () {
  _$jscoverage['common/error.js'][3]++;
  "use strict";
  _$jscoverage['common/error.js'][5]++;
  return ({render: (function (errObj, ctl) {
  _$jscoverage['common/error.js'][8]++;
  LAZO.require([("text!" + errObj.code), "utils/template", "underscore"], (function (errTemplate, template, _) {
  _$jscoverage['common/error.js'][9]++;
  var templateEngine = template.getTemplateEngine("handlebars"), compiledTemplate = templateEngine.compile(errTemplate), view;
  _$jscoverage['common/error.js'][13]++;
  ctl = (ctl || LAZO.ctl);
  _$jscoverage['common/error.js'][14]++;
  view = (ctl? ctl.currentView: LAZO.ctl.currentView);
  _$jscoverage['common/error.js'][15]++;
  ctl.children = {};
  _$jscoverage['common/error.js'][18]++;
  _.extend(view, errObj);
  _$jscoverage['common/error.js'][19]++;
  view.templateEngine = "handlebars";
  _$jscoverage['common/error.js'][20]++;
  view._templateEngine = templateEngine;
  _$jscoverage['common/error.js'][21]++;
  view.template = compiledTemplate;
  _$jscoverage['common/error.js'][22]++;
  view.render();
}));
})});
}));
