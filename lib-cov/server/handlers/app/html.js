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
if (! _$jscoverage['server/handlers/app/html.js']) {
  _$jscoverage['server/handlers/app/html.js'] = [];
  _$jscoverage['server/handlers/app/html.js'][1] = 0;
  _$jscoverage['server/handlers/app/html.js'][3] = 0;
  _$jscoverage['server/handlers/app/html.js'][5] = 0;
  _$jscoverage['server/handlers/app/html.js'][6] = 0;
}
_$jscoverage['server/handlers/app/html.js'].source = ["define(['handlebars', 'page'], function (Handlebars, page) {","","    var pageTemplate = Handlebars.templates['page.hbs'];","","    return function (options) {","        return pageTemplate(options);","    };","","});"];
_$jscoverage['server/handlers/app/html.js'][1]++;
define(["handlebars", "page"], (function (Handlebars, page) {
  _$jscoverage['server/handlers/app/html.js'][3]++;
  var pageTemplate = Handlebars.templates["page.hbs"];
  _$jscoverage['server/handlers/app/html.js'][5]++;
  return (function (options) {
  _$jscoverage['server/handlers/app/html.js'][6]++;
  return pageTemplate(options);
});
}));
