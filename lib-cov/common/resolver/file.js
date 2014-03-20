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
if (! _$jscoverage['common/resolver/file.js']) {
  _$jscoverage['common/resolver/file.js'] = [];
  _$jscoverage['common/resolver/file.js'][1] = 0;
  _$jscoverage['common/resolver/file.js'][3] = 0;
  _$jscoverage['common/resolver/file.js'][5] = 0;
  _$jscoverage['common/resolver/file.js'][8] = 0;
  _$jscoverage['common/resolver/file.js'][10] = 0;
  _$jscoverage['common/resolver/file.js'][11] = 0;
  _$jscoverage['common/resolver/file.js'][14] = 0;
  _$jscoverage['common/resolver/file.js'][20] = 0;
  _$jscoverage['common/resolver/file.js'][21] = 0;
  _$jscoverage['common/resolver/file.js'][25] = 0;
  _$jscoverage['common/resolver/file.js'][29] = 0;
  _$jscoverage['common/resolver/file.js'][34] = 0;
}
_$jscoverage['common/resolver/file.js'].source = ["define(['l!serverFileResolver', 'underscore'], function (serverFileResolver, _) {","","    'use strict';","","    return _.extend({","","        getPath: function (moduleName, cmpName, moduleType) {","            var pathPrefix = moduleName.indexOf('a:') === 0 ? 'app' : '';","","            moduleName = pathPrefix ? moduleName.split(':')[1] : moduleName;","            pathPrefix = pathPrefix &amp;&amp; (moduleType === 'view' || moduleType === 'template') ?","                pathPrefix + '/views' : pathPrefix;","","            return (pathPrefix ? pathPrefix : ('components/' + cmpName)) +","                (!pathPrefix &amp;&amp; (moduleType === 'view' || moduleType === 'template') ? '/views' : '') +","                '/' + moduleName;","        },","","        getBasePath: function (moduleName, cmpName, moduleType) {","            var modulePath = this.getPath(moduleName, cmpName, moduleType);","            return modulePath.substr(0, modulePath.lastIndexOf('/'));","        },","","        getTemplateName: function (view) {","            return _.result(view, 'templateName') || view.name;","        },","","        getTemplatePath: function (view) {","            return this.getPath(this.getTemplateName(view) + '.' + LAZO.app.getTemplateExt(view.templateEngine), view.ctl.name, 'template');","        },","","        // TODO: deprecated, can be removed once load_view is merged to dev","        convertTemplatePath: function (templatePath) {","            return 'tmp/' + templatePath.substr(0, templatePath.lastIndexOf('.')) + '.js';","        }","","    }, serverFileResolver);","","});"];
_$jscoverage['common/resolver/file.js'][1]++;
define(["l!serverFileResolver", "underscore"], (function (serverFileResolver, _) {
  _$jscoverage['common/resolver/file.js'][3]++;
  "use strict";
  _$jscoverage['common/resolver/file.js'][5]++;
  return _.extend({getPath: (function (moduleName, cmpName, moduleType) {
  _$jscoverage['common/resolver/file.js'][8]++;
  var pathPrefix = ((moduleName.indexOf("a:") === 0)? "app": "");
  _$jscoverage['common/resolver/file.js'][10]++;
  moduleName = (pathPrefix? moduleName.split(":")[1]: moduleName);
  _$jscoverage['common/resolver/file.js'][11]++;
  pathPrefix = ((pathPrefix && ((moduleType === "view") || (moduleType === "template")))? (pathPrefix + "/views"): pathPrefix);
  _$jscoverage['common/resolver/file.js'][14]++;
  return ((pathPrefix? pathPrefix: ("components/" + cmpName)) + (((! pathPrefix) && ((moduleType === "view") || (moduleType === "template")))? "/views": "") + "/" + moduleName);
}), getBasePath: (function (moduleName, cmpName, moduleType) {
  _$jscoverage['common/resolver/file.js'][20]++;
  var modulePath = this.getPath(moduleName, cmpName, moduleType);
  _$jscoverage['common/resolver/file.js'][21]++;
  return modulePath.substr(0, modulePath.lastIndexOf("/"));
}), getTemplateName: (function (view) {
  _$jscoverage['common/resolver/file.js'][25]++;
  return (_.result(view, "templateName") || view.name);
}), getTemplatePath: (function (view) {
  _$jscoverage['common/resolver/file.js'][29]++;
  return this.getPath((this.getTemplateName(view) + "." + LAZO.app.getTemplateExt(view.templateEngine)), view.ctl.name, "template");
}), convertTemplatePath: (function (templatePath) {
  _$jscoverage['common/resolver/file.js'][34]++;
  return ("tmp/" + templatePath.substr(0, templatePath.lastIndexOf(".")) + ".js");
})}, serverFileResolver);
}));
