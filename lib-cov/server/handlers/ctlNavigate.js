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
if (! _$jscoverage['server/handlers/ctlNavigate.js']) {
  _$jscoverage['server/handlers/ctlNavigate.js'] = [];
  _$jscoverage['server/handlers/ctlNavigate.js'][1] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][4] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][6] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][7] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][12] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][37] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][38] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][46] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][50] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][51] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][52] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][55] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][57] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][58] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][59] = 0;
  _$jscoverage['server/handlers/ctlNavigate.js'][63] = 0;
}
_$jscoverage['server/handlers/ctlNavigate.js'].source = ["define(['context', 'utils/loader', 'handlers/utils', 'jitc/main', 'renderer', 'bundler'],","    function (Context, loader, utils, jitc, renderer, Bundler) {","","    var bundle = new Bundler();","","    function bundleRequest(request, ctl, ctx, assets, params, callback) {","        var rootCtx = utils.getRootCtxForReply(ctx, assets),","            cmpBundles = jitc.buildComponentBundleDef(renderer.getList('component', ctl)),","            cookies = ctx._rootCtx.cookies;","","        // DO NOT COMBO HANDLE","        callback(ctl.toJSON(true));","","        // BEGIN disable combo handling","        // if (cookies &amp;&amp; cookies.development === '1') {","        //     return callback(ctl.toJSON(true));","        // }","","        // bundle.create(ctl.ctx.location.path, {","        //     components: cmpBundles,","        //     app: {","        //         css: LAZO.app.css,","        //         js: ['app/application'].concat(LAZO.app.js)","        //     },","        //     loaded: params.exclude,","        //     type: 'controller_navigate',","        //     controller: params.name,","        //     action: params.action","        // }, function (modules) {","        //     rootCtx.dependencies.modules = modules.js;","        //     rootCtx.dependencies.css = modules.css;","        //     callback(ctl.toJSON(true));","        // });","        // END disable combo handling","    }","","    return function (request, route) {","        var payload = request.payload,","            options = {","                params: JSON.parse(request.payload.params),","                cookies: utils.getCookies(request),","                _rawReq: request","            },","            ctx = new Context(options);","","        loader(request.payload.name, {","            ctx: ctx,","            action: request.payload.action,","            error: function (err) {","                err = err instanceof Error ? err : new Error(err);","                LAZO.logger.log('error', 'processor.reply', 'Error processing request', err);","                throw err; // requestDomain catches error","            },","            success: function (ctl) {","                utils.getAssets(request.payload.name, ctx, {","                    success: function (assets) {","                        utils.setAssets(ctl, assets);","                        bundleRequest(request, ctl, ctx, assets, request.payload, function (response) {","                            request.reply(response);","                        });","                    },","                    error: function (err) {","                        throw err;","                    }","                });","            }","        });","","    };","","});"];
_$jscoverage['server/handlers/ctlNavigate.js'][1]++;
define(["context", "utils/loader", "handlers/utils", "jitc/main", "renderer", "bundler"], (function (Context, loader, utils, jitc, renderer, Bundler) {
  _$jscoverage['server/handlers/ctlNavigate.js'][4]++;
  var bundle = new Bundler();
  _$jscoverage['server/handlers/ctlNavigate.js'][6]++;
  function bundleRequest(request, ctl, ctx, assets, params, callback) {
    _$jscoverage['server/handlers/ctlNavigate.js'][7]++;
    var rootCtx = utils.getRootCtxForReply(ctx, assets), cmpBundles = jitc.buildComponentBundleDef(renderer.getList("component", ctl)), cookies = ctx._rootCtx.cookies;
    _$jscoverage['server/handlers/ctlNavigate.js'][12]++;
    callback(ctl.toJSON(true));
}
  _$jscoverage['server/handlers/ctlNavigate.js'][37]++;
  return (function (request, route) {
  _$jscoverage['server/handlers/ctlNavigate.js'][38]++;
  var payload = request.payload, options = {params: JSON.parse(request.payload.params), cookies: utils.getCookies(request), _rawReq: request}, ctx = new Context(options);
  _$jscoverage['server/handlers/ctlNavigate.js'][46]++;
  loader(request.payload.name, {ctx: ctx, action: request.payload.action, error: (function (err) {
  _$jscoverage['server/handlers/ctlNavigate.js'][50]++;
  err = ((err instanceof Error)? err: new Error(err));
  _$jscoverage['server/handlers/ctlNavigate.js'][51]++;
  LAZO.logger.log("error", "processor.reply", "Error processing request", err);
  _$jscoverage['server/handlers/ctlNavigate.js'][52]++;
  throw err;
}), success: (function (ctl) {
  _$jscoverage['server/handlers/ctlNavigate.js'][55]++;
  utils.getAssets(request.payload.name, ctx, {success: (function (assets) {
  _$jscoverage['server/handlers/ctlNavigate.js'][57]++;
  utils.setAssets(ctl, assets);
  _$jscoverage['server/handlers/ctlNavigate.js'][58]++;
  bundleRequest(request, ctl, ctx, assets, request.payload, (function (response) {
  _$jscoverage['server/handlers/ctlNavigate.js'][59]++;
  request.reply(response);
}));
}), error: (function (err) {
  _$jscoverage['server/handlers/ctlNavigate.js'][63]++;
  throw err;
})});
})});
});
}));
