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
if (! _$jscoverage['common/base.js']) {
  _$jscoverage['common/base.js'] = [];
  _$jscoverage['common/base.js'][6] = 0;
  _$jscoverage['common/base.js'][8] = 0;
  _$jscoverage['common/base.js'][10] = 0;
  _$jscoverage['common/base.js'][12] = 0;
  _$jscoverage['common/base.js'][14] = 0;
}
_$jscoverage['common/base.js'].source = ["/*global define:false*/","","/**"," * Base object. Should be used to create all other objects."," */","define(['backbone'], function (Backbone) {","","    'use strict';","","    var Base = function () {};","","    Base.extend = Backbone.Model.extend;","","    return Base;","});"];
_$jscoverage['common/base.js'][6]++;
define(["backbone"], (function (Backbone) {
  _$jscoverage['common/base.js'][8]++;
  "use strict";
  _$jscoverage['common/base.js'][10]++;
  var Base = (function () {
});
  _$jscoverage['common/base.js'][12]++;
  Base.extend = Backbone.Model.extend;
  _$jscoverage['common/base.js'][14]++;
  return Base;
}));
