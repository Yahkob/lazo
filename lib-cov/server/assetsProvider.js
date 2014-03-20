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
if (! _$jscoverage['server/assetsProvider.js']) {
  _$jscoverage['server/assetsProvider.js'] = [];
  _$jscoverage['server/assetsProvider.js'][3] = 0;
  _$jscoverage['server/assetsProvider.js'][5] = 0;
  _$jscoverage['server/assetsProvider.js'][6] = 0;
  _$jscoverage['server/assetsProvider.js'][7] = 0;
  _$jscoverage['server/assetsProvider.js'][10] = 0;
  _$jscoverage['server/assetsProvider.js'][13] = 0;
  _$jscoverage['server/assetsProvider.js'][14] = 0;
  _$jscoverage['server/assetsProvider.js'][15] = 0;
  _$jscoverage['server/assetsProvider.js'][16] = 0;
  _$jscoverage['server/assetsProvider.js'][19] = 0;
  _$jscoverage['server/assetsProvider.js'][20] = 0;
  _$jscoverage['server/assetsProvider.js'][21] = 0;
  _$jscoverage['server/assetsProvider.js'][23] = 0;
  _$jscoverage['server/assetsProvider.js'][24] = 0;
  _$jscoverage['server/assetsProvider.js'][25] = 0;
  _$jscoverage['server/assetsProvider.js'][28] = 0;
  _$jscoverage['server/assetsProvider.js'][29] = 0;
  _$jscoverage['server/assetsProvider.js'][32] = 0;
  _$jscoverage['server/assetsProvider.js'][33] = 0;
  _$jscoverage['server/assetsProvider.js'][36] = 0;
  _$jscoverage['server/assetsProvider.js'][41] = 0;
  _$jscoverage['server/assetsProvider.js'][42] = 0;
  _$jscoverage['server/assetsProvider.js'][47] = 0;
  _$jscoverage['server/assetsProvider.js'][61] = 0;
  _$jscoverage['server/assetsProvider.js'][62] = 0;
  _$jscoverage['server/assetsProvider.js'][65] = 0;
  _$jscoverage['server/assetsProvider.js'][66] = 0;
  _$jscoverage['server/assetsProvider.js'][69] = 0;
  _$jscoverage['server/assetsProvider.js'][70] = 0;
  _$jscoverage['server/assetsProvider.js'][71] = 0;
  _$jscoverage['server/assetsProvider.js'][72] = 0;
  _$jscoverage['server/assetsProvider.js'][73] = 0;
  _$jscoverage['server/assetsProvider.js'][74] = 0;
  _$jscoverage['server/assetsProvider.js'][77] = 0;
  _$jscoverage['server/assetsProvider.js'][79] = 0;
  _$jscoverage['server/assetsProvider.js'][80] = 0;
  _$jscoverage['server/assetsProvider.js'][83] = 0;
  _$jscoverage['server/assetsProvider.js'][86] = 0;
  _$jscoverage['server/assetsProvider.js'][87] = 0;
  _$jscoverage['server/assetsProvider.js'][88] = 0;
  _$jscoverage['server/assetsProvider.js'][89] = 0;
  _$jscoverage['server/assetsProvider.js'][90] = 0;
  _$jscoverage['server/assetsProvider.js'][91] = 0;
  _$jscoverage['server/assetsProvider.js'][94] = 0;
  _$jscoverage['server/assetsProvider.js'][96] = 0;
  _$jscoverage['server/assetsProvider.js'][97] = 0;
  _$jscoverage['server/assetsProvider.js'][100] = 0;
  _$jscoverage['server/assetsProvider.js'][105] = 0;
  _$jscoverage['server/assetsProvider.js'][106] = 0;
  _$jscoverage['server/assetsProvider.js'][107] = 0;
  _$jscoverage['server/assetsProvider.js'][109] = 0;
  _$jscoverage['server/assetsProvider.js'][115] = 0;
}
_$jscoverage['server/assetsProvider.js'].source = ["/*global define:false, LAZO:false*/","","define(['underscore', 'async', 'fs', 'path'], function (_, async, fs, path) {","","    var invoke = function (callback) {","        if (typeof callback !== 'function') {","            return;","        }","","        callback.apply(this, _.rest(arguments));","    };","","    var scanDir = function (baseDir, callback) {","        fs.readdir(baseDir, function (error, files) {","            if (error || !files) {","                return callback(null, null);","            }","","            var tasks = _.map(files, function (file) {","                return function (callback) {","                    var fullPath = path.join(baseDir, file);","","                    fs.stat(fullPath, function (error, stats) {","                        if (error || !stats) {","                            return callback(null, null);","                        }","","                        if (stats.isDirectory()) {","                            return scanDir(fullPath, callback);","                        }","","                        if (stats.isFile()) {","                            return callback(null, fullPath);","                        }","","                        callback(null, null);","                    });","                };","            });","","            async.parallel(tasks, function (error, result) {","                callback(error, _.flatten(result));","            });","        });","    };","","    var AssetsProvider = LAZO.app.assets.Provider.extend({","","        _cache: {},","","        /**","         * Scans the assets directory and return the asset list.","         * @param {Object} options","         * @param {String} options.componentName If specified, returns the asset list for the given component (stored","         * under 'components/[componentName]/assets' directory), otherwise returns the list of assets for the","         * application (stored under 'app/assets' directory).","         * @param {Function} options.success The success callback.","         * @param {Function} options.error The error callback.","         */","        list: function (options) {","            if (!options) {","                return;","            }","","            if(typeof options.componentName === 'string'){","                options.componentName = [options.componentName];","            }","","            var fns = {};","            fns['app'] = function(callback){","                var assetsPath = path.join(LAZO.FILE_REPO_DIR, 'app', 'assets');","                scanDir(assetsPath, function (error, files) {","                    if (error) {","                        return callback(error);","                    }","","                    var start = assetsPath.length + 1;","","                    files = _.map(files, function (file) {","                        return file.substr(start);","                    });","","                    callback(null, files);","                }.bind(this));","            };","            _.each(options.componentName, function(componentName){","                fns[componentName] = function(callback){","                    var assetsPath = path.join(LAZO.FILE_REPO_DIR, 'components', componentName, 'assets');","                    scanDir(assetsPath, function (error, files) {","                        if (error) {","                            return callback(error);","                        }","","                        var start = assetsPath.length + 1;","","                        files = _.map(files, function (file) {","                            return file.substr(start);","                        });","","                        callback(null, files);","                    }.bind(this));","                };","            });","","            async.parallel(fns, function(err, data){","                if(err){","                    return options.error(err);","                }","                options.success(data);","            });","        }","","    });","","    return AssetsProvider;","});"];
_$jscoverage['server/assetsProvider.js'][3]++;
define(["underscore", "async", "fs", "path"], (function (_, async, fs, path) {
  _$jscoverage['server/assetsProvider.js'][5]++;
  var invoke = (function (callback) {
  _$jscoverage['server/assetsProvider.js'][6]++;
  if (((typeof callback) !== "function")) {
    _$jscoverage['server/assetsProvider.js'][7]++;
    return;
  }
  _$jscoverage['server/assetsProvider.js'][10]++;
  callback.apply(this, _.rest(arguments));
});
  _$jscoverage['server/assetsProvider.js'][13]++;
  var scanDir = (function (baseDir, callback) {
  _$jscoverage['server/assetsProvider.js'][14]++;
  fs.readdir(baseDir, (function (error, files) {
  _$jscoverage['server/assetsProvider.js'][15]++;
  if ((error || (! files))) {
    _$jscoverage['server/assetsProvider.js'][16]++;
    return callback(null, null);
  }
  _$jscoverage['server/assetsProvider.js'][19]++;
  var tasks = _.map(files, (function (file) {
  _$jscoverage['server/assetsProvider.js'][20]++;
  return (function (callback) {
  _$jscoverage['server/assetsProvider.js'][21]++;
  var fullPath = path.join(baseDir, file);
  _$jscoverage['server/assetsProvider.js'][23]++;
  fs.stat(fullPath, (function (error, stats) {
  _$jscoverage['server/assetsProvider.js'][24]++;
  if ((error || (! stats))) {
    _$jscoverage['server/assetsProvider.js'][25]++;
    return callback(null, null);
  }
  _$jscoverage['server/assetsProvider.js'][28]++;
  if (stats.isDirectory()) {
    _$jscoverage['server/assetsProvider.js'][29]++;
    return scanDir(fullPath, callback);
  }
  _$jscoverage['server/assetsProvider.js'][32]++;
  if (stats.isFile()) {
    _$jscoverage['server/assetsProvider.js'][33]++;
    return callback(null, fullPath);
  }
  _$jscoverage['server/assetsProvider.js'][36]++;
  callback(null, null);
}));
});
}));
  _$jscoverage['server/assetsProvider.js'][41]++;
  async.parallel(tasks, (function (error, result) {
  _$jscoverage['server/assetsProvider.js'][42]++;
  callback(error, _.flatten(result));
}));
}));
});
  _$jscoverage['server/assetsProvider.js'][47]++;
  var AssetsProvider = LAZO.app.assets.Provider.extend({_cache: {}, list: (function (options) {
  _$jscoverage['server/assetsProvider.js'][61]++;
  if ((! options)) {
    _$jscoverage['server/assetsProvider.js'][62]++;
    return;
  }
  _$jscoverage['server/assetsProvider.js'][65]++;
  if (((typeof options.componentName) === "string")) {
    _$jscoverage['server/assetsProvider.js'][66]++;
    options.componentName = [options.componentName];
  }
  _$jscoverage['server/assetsProvider.js'][69]++;
  var fns = {};
  _$jscoverage['server/assetsProvider.js'][70]++;
  fns.app = (function (callback) {
  _$jscoverage['server/assetsProvider.js'][71]++;
  var assetsPath = path.join(LAZO.FILE_REPO_DIR, "app", "assets");
  _$jscoverage['server/assetsProvider.js'][72]++;
  scanDir(assetsPath, (function (error, files) {
  _$jscoverage['server/assetsProvider.js'][73]++;
  if (error) {
    _$jscoverage['server/assetsProvider.js'][74]++;
    return callback(error);
  }
  _$jscoverage['server/assetsProvider.js'][77]++;
  var start = (assetsPath.length + 1);
  _$jscoverage['server/assetsProvider.js'][79]++;
  files = _.map(files, (function (file) {
  _$jscoverage['server/assetsProvider.js'][80]++;
  return file.substr(start);
}));
  _$jscoverage['server/assetsProvider.js'][83]++;
  callback(null, files);
}).bind(this));
});
  _$jscoverage['server/assetsProvider.js'][86]++;
  _.each(options.componentName, (function (componentName) {
  _$jscoverage['server/assetsProvider.js'][87]++;
  fns[componentName] = (function (callback) {
  _$jscoverage['server/assetsProvider.js'][88]++;
  var assetsPath = path.join(LAZO.FILE_REPO_DIR, "components", componentName, "assets");
  _$jscoverage['server/assetsProvider.js'][89]++;
  scanDir(assetsPath, (function (error, files) {
  _$jscoverage['server/assetsProvider.js'][90]++;
  if (error) {
    _$jscoverage['server/assetsProvider.js'][91]++;
    return callback(error);
  }
  _$jscoverage['server/assetsProvider.js'][94]++;
  var start = (assetsPath.length + 1);
  _$jscoverage['server/assetsProvider.js'][96]++;
  files = _.map(files, (function (file) {
  _$jscoverage['server/assetsProvider.js'][97]++;
  return file.substr(start);
}));
  _$jscoverage['server/assetsProvider.js'][100]++;
  callback(null, files);
}).bind(this));
});
}));
  _$jscoverage['server/assetsProvider.js'][105]++;
  async.parallel(fns, (function (err, data) {
  _$jscoverage['server/assetsProvider.js'][106]++;
  if (err) {
    _$jscoverage['server/assetsProvider.js'][107]++;
    return options.error(err);
  }
  _$jscoverage['server/assetsProvider.js'][109]++;
  options.success(data);
}));
})});
  _$jscoverage['server/assetsProvider.js'][115]++;
  return AssetsProvider;
}));
