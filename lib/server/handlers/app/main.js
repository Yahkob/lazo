define(['handlers/utils', 'handlers/app/processor'], function (utils, processor) {

    return function (request, route, svr) {
        var payload = request.payload,
            params = {
                params: utils.getParams(request),
                cookies: utils.getCookies(request),
                _rawReq: request,
                svr: svr,
                headers: utils.getHeaders(request),
                url: utils.getParsedUrl(request)
            };

        if (payload && payload._lazo) {
            params.exlcude = payload._lazo.exclude;
            params.layout = payload._lazo.layout;
        }

        processor.reply(route, params, {
            error: function (err) {
                err = err instanceof Error ? err : new Error(err);
                LAZO.logger.log('error', 'processor.reply', 'Error processing request, ' + err, err);
                throw err; // hapi domain catches error
            },
            success: function (response) {
                request.reply(response);
            }
        });

    };

});