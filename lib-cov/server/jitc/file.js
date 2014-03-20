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
if (! _$jscoverage['server/jitc/file.js']) {
  _$jscoverage['server/jitc/file.js'] = [];
  _$jscoverage['server/jitc/file.js'][1] = 0;
  _$jscoverage['server/jitc/file.js'][3] = 0;
  _$jscoverage['server/jitc/file.js'][6] = 0;
  _$jscoverage['server/jitc/file.js'][9] = 0;
  _$jscoverage['server/jitc/file.js'][16] = 0;
  _$jscoverage['server/jitc/file.js'][20] = 0;
  _$jscoverage['server/jitc/file.js'][24] = 0;
  _$jscoverage['server/jitc/file.js'][25] = 0;
  _$jscoverage['server/jitc/file.js'][26] = 0;
  _$jscoverage['server/jitc/file.js'][28] = 0;
  _$jscoverage['server/jitc/file.js'][29] = 0;
  _$jscoverage['server/jitc/file.js'][32] = 0;
  _$jscoverage['server/jitc/file.js'][33] = 0;
  _$jscoverage['server/jitc/file.js'][36] = 0;
  _$jscoverage['server/jitc/file.js'][37] = 0;
  _$jscoverage['server/jitc/file.js'][38] = 0;
  _$jscoverage['server/jitc/file.js'][39] = 0;
  _$jscoverage['server/jitc/file.js'][40] = 0;
  _$jscoverage['server/jitc/file.js'][42] = 0;
  _$jscoverage['server/jitc/file.js'][43] = 0;
  _$jscoverage['server/jitc/file.js'][49] = 0;
  _$jscoverage['server/jitc/file.js'][50] = 0;
  _$jscoverage['server/jitc/file.js'][51] = 0;
  _$jscoverage['server/jitc/file.js'][52] = 0;
  _$jscoverage['server/jitc/file.js'][55] = 0;
  _$jscoverage['server/jitc/file.js'][56] = 0;
  _$jscoverage['server/jitc/file.js'][57] = 0;
  _$jscoverage['server/jitc/file.js'][59] = 0;
  _$jscoverage['server/jitc/file.js'][60] = 0;
  _$jscoverage['server/jitc/file.js'][62] = 0;
  _$jscoverage['server/jitc/file.js'][66] = 0;
  _$jscoverage['server/jitc/file.js'][67] = 0;
  _$jscoverage['server/jitc/file.js'][68] = 0;
  _$jscoverage['server/jitc/file.js'][69] = 0;
  _$jscoverage['server/jitc/file.js'][72] = 0;
}
_$jscoverage['server/jitc/file.js'].source = ["define(function () {","","    'use strict';","","    // parent module is only loaded on the server","    var fs = require('fs'),","        path = require('path');","","    return {","","        read: function (filePath) {","","        },","","        write: function (filePath, data, callback) {","            fs.writeFile(filePath, data, 'utf8', callback);","        },","","        expandPath: function (filePath, baseDir, callback) {","            var dirs,","                pos = 0,","                absolutePath = path.normalize(baseDir + '/' + filePath);","","            function next(dirs, base, pos) {","                if (pos === dirs.length) { // all dirs exist","                    return callback(null);","                }","                pos++;","                mkdir(dirs, base, pos);","            }","","            function buildPath(dirs, base, pos) {","                return path.normalize(base + '/' + dirs.slice(0, pos).join('/'));","            }","","            function mkdir(dirs, base, pos) {","                var currentPath = buildPath(dirs, base, pos);","                fs.exists(currentPath, function (exists) {","                    if (exists) {","                        next(dirs, base, pos);","                    } else {","                        fs.mkdir(currentPath, function (err) {","                            next(dirs, base, pos);","                        });","                    }","                });","            }","","            function start() {","                fs.exists(filePath, function (exists) {","                    if (exists) {","                        return callback(null);","                    }","","                    dirs = path.dirname(filePath).split('/');","                    if (!dirs[dirs.length - 1]) { // remove empty element created by trailing slash","                        dirs.pop();","                    }","                    if (!dirs[0]) { // remove empty element created by first slash","                        dirs.unshift();","                    }","                    mkdir(dirs, baseDir, pos);","                });","            }","","            fs.exists(baseDir, function (exists) {","                if (!exists) {","                    fs.mkdir(baseDir, function (err) {","                        start();","                    });","                } else {","                    start();","                }","            });","","        }","","    };","","});"];
_$jscoverage['server/jitc/file.js'][1]++;
define((function () {
  _$jscoverage['server/jitc/file.js'][3]++;
  "use strict";
  _$jscoverage['server/jitc/file.js'][6]++;
  var fs = require("fs"), path = require("path");
  _$jscoverage['server/jitc/file.js'][9]++;
  return ({read: (function (filePath) {
}), write: (function (filePath, data, callback) {
  _$jscoverage['server/jitc/file.js'][16]++;
  fs.writeFile(filePath, data, "utf8", callback);
}), expandPath: (function (filePath, baseDir, callback) {
  _$jscoverage['server/jitc/file.js'][20]++;
  var dirs, pos = 0, absolutePath = path.normalize((baseDir + "/" + filePath));
  _$jscoverage['server/jitc/file.js'][24]++;
  function next(dirs, base, pos) {
    _$jscoverage['server/jitc/file.js'][25]++;
    if ((pos === dirs.length)) {
      _$jscoverage['server/jitc/file.js'][26]++;
      return callback(null);
    }
    _$jscoverage['server/jitc/file.js'][28]++;
    (pos++);
    _$jscoverage['server/jitc/file.js'][29]++;
    mkdir(dirs, base, pos);
}
  _$jscoverage['server/jitc/file.js'][32]++;
  function buildPath(dirs, base, pos) {
    _$jscoverage['server/jitc/file.js'][33]++;
    return path.normalize((base + "/" + dirs.slice(0, pos).join("/")));
}
  _$jscoverage['server/jitc/file.js'][36]++;
  function mkdir(dirs, base, pos) {
    _$jscoverage['server/jitc/file.js'][37]++;
    var currentPath = buildPath(dirs, base, pos);
    _$jscoverage['server/jitc/file.js'][38]++;
    fs.exists(currentPath, (function (exists) {
  _$jscoverage['server/jitc/file.js'][39]++;
  if (exists) {
    _$jscoverage['server/jitc/file.js'][40]++;
    next(dirs, base, pos);
  }
  else {
    _$jscoverage['server/jitc/file.js'][42]++;
    fs.mkdir(currentPath, (function (err) {
  _$jscoverage['server/jitc/file.js'][43]++;
  next(dirs, base, pos);
}));
  }
}));
}
  _$jscoverage['server/jitc/file.js'][49]++;
  function start() {
    _$jscoverage['server/jitc/file.js'][50]++;
    fs.exists(filePath, (function (exists) {
  _$jscoverage['server/jitc/file.js'][51]++;
  if (exists) {
    _$jscoverage['server/jitc/file.js'][52]++;
    return callback(null);
  }
  _$jscoverage['server/jitc/file.js'][55]++;
  dirs = path.dirname(filePath).split("/");
  _$jscoverage['server/jitc/file.js'][56]++;
  if ((! dirs[(dirs.length - 1)])) {
    _$jscoverage['server/jitc/file.js'][57]++;
    dirs.pop();
  }
  _$jscoverage['server/jitc/file.js'][59]++;
  if ((! dirs[0])) {
    _$jscoverage['server/jitc/file.js'][60]++;
    dirs.unshift();
  }
  _$jscoverage['server/jitc/file.js'][62]++;
  mkdir(dirs, baseDir, pos);
}));
}
  _$jscoverage['server/jitc/file.js'][66]++;
  fs.exists(baseDir, (function (exists) {
  _$jscoverage['server/jitc/file.js'][67]++;
  if ((! exists)) {
    _$jscoverage['server/jitc/file.js'][68]++;
    fs.mkdir(baseDir, (function (err) {
  _$jscoverage['server/jitc/file.js'][69]++;
  start();
}));
  }
  else {
    _$jscoverage['server/jitc/file.js'][72]++;
    start();
  }
}));
})});
}));
