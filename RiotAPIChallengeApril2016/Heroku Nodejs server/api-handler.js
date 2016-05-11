/*
STEP 1: Get user input: Summoner name and region
STEP 2: Get summoner ID
STEP 3: Get top 5 champion IDs of summoner ID
STEP 4: Convert the champion IDs into names
STEP 5: Finalize all async calls
*/
var http = require("http");
var https = require("https");

var app = {
	httpProtocol: 'https',
	timeout: 5000,
	summonerName: '',
	region: '',
	summonerId: '',
	champIds: [],
	champImages: [],
	champRank: 0,
	key: '',
	
}



app.call = {
	getSummonerID: function(callback){
		app.apiRequest(app.region + '.api.pvp.net', '/api/lol/' + app.region + '/v1.4/summoner/by-name/' + app.summonerName + '?api_key=' + app.key, callback);
	},

	getTopChamps: function(callback){
		var convertedRegion = app.region.toUpperCase();
		if (convertedRegion != 'RU' && convertedRegion != 'KR'){
			convertedRegion += '1';
		}
		app.apiRequest(app.region + '.api.pvp.net', '/championmastery/location/' + convertedRegion + '/player/' + app.summonerId + '/topchampions?count=5&api_key=' + app.key, callback);
	},

	convertChampIDToName: function(champId, callback){
		app.apiRequest('global.api.pvp.net', '/api/lol/static-data/' + app.region + '/v1.2/champion/' + champId + '?api_key=' + app.key, callback);
	}
}

//tutorial time
app.apiRequest = function(hostUrl, optionsUrl, cb) {

    var complete = false

    // prepare
    var options = {
        hostname: hostUrl,
        path: optionsUrl,
        method: 'GET'
    }

    if (app.httpProtocol === 'https') {
        var request = require('https').request(options);
        //console.log("Request: " + options.hostname + options.path);
    }
    else {
        var request = require('http').request(options)
    }

    // response
    request.on('response', function(response) {
        var data = []
        var size = 0

        response.on('data', function(chunk) {
            data.push(chunk)
            size += chunk.length
        })

        response.on('end', function() {

            if (complete) {
                return
            }
            else {
                complete = true
            }

            // process buffer and clear mem
            var buf = new Buffer(size)
            var pos = 0

            for (var i = 0; i < data.length; ++i) {
                data[i].copy(buf, pos)
                pos += data[i].length
            }

            data = buf.toString('utf8').trim()

            var error = null

            // validate
            if (data.match(/^(\{.*\}|\[.*\])$/)) {

                // ok
                data = JSON.parse(data)

                if (data.data !== undefined) {
                    data = data.data
                }
                else if (data.error !== undefined) {
                    complete = true
                    error = new Error('error')
                    error.origin = 'api'
                    error.details = data.error
                }


            }
            else if (data.match(/^<errors .+<\/errors>$/) || data.match(/^<\?xml version.+<\/errors>$/)) {

                // xml error response
                data = xml2json.parser(data)

                // fix for JSONC compatibility
                complete = true
                error = new Error('error')
                error.origin = 'api'
                error.details = data.errors.error !== undefined ? [data.errors.error] : data.errors

                error.details.forEach(function(err, errk) {
                    if (err.internalreason !== undefined) {
                        error.details[errk].internalReason = err.internalreason
                        delete error.details[errk].internalreason
                    }
                })

            }
            else if (~data.indexOf('<H2>Error ')) {

                // html error response
                complete = true
                var error = new Error('error')
                data.replace(/<H1>([^<]+)<\/H1>\n<H2>Error (\d+)<\/H2>/, function(s, reason, code) {
                    error.origin = 'api'
                    error.details = {
                        internalReason: reason,
                        code: code
                    }
                })

            }
            else {

                // not json
                complete = true
                error = new Error('not json')
                error.origin = 'api'

            }

            // parse error
            if (error && error.origin === 'api' && error.message === 'error') {
                var errorDetails = error.details
                if (
                    error.details[0] !== undefined && error.details[0].code !== undefined && error.details[0].code === 'ResourceNotFoundException'
                ) {
                    complete = true
                    error = new Error('not found')
                    error.origin = 'method'
                    error.details = errorDetails
                }
                else if (error.details.code == 403) {
                    complete = true
                    error = new Error('not allowed')
                    error.origin = 'method'
                    error.details = errorDetails
                }
                else if (error.details.message === 'Invalid id') {
                    complete = true
                    error = new Error('invalid id')
                    error.origin = 'method'
                    error.details = errorDetails
                }
                else if (error.details[0] && error.details[0].internalReason === 'Developer key required for this operation') {
                    complete = true
                    error = new Error('developer key missing')
                    error.origin = 'api'
                    error.details = errorDetails
                }
            }

            // parse response
            if (data.totalItems !== undefined && data.totalItems == 0) {
                complete = true
                error = new Error('not found')
                error.origin = 'method'
            }
            else if (
                data.feed !== undefined && data.feed['openSearch$totalResults'] !== undefined && data.feed['openSearch$totalResults']['$t'] !== undefined && data.feed['openSearch$totalResults']['$t'] == 0
            ) {
                complete = true
                error = new Error('not found')
                error.origin = 'method'
            }

            // do callback
            cb(error, data)

        })

        // early disconnect
        response.on('close', function() {
            if (!complete) {
                complete = true
                var err = new Error('connection closed')
                err.origin = 'api'
                cb(err)
            }
        })

    })

    // no endless waiting
    request.setTimeout(app.timeout, function() {
        if (!complete) {
            complete = true
            var err = new Error('request timeout')
            err.origin = 'request'
            cb(err)
            request.destroy()
        }
    })

    // connection error
    request.on('error', function(error) {
        if (!complete) {
            complete = true
            var err = new Error('connection error')
            err.origin = 'request'
            err.details = error
            cb(err)
        }
    })

    // perform and finish request
    request.end()
}

module.exports = app;