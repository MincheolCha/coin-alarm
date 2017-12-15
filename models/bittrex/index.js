const { get } = require('../../helpers/restful');
const config = require('../../helpers/config.json');

const bittrex = config.bittrex;

module.exports = class Bittrex {
    constructor() {
        this.host = bittrex.host;
        this.path = 'api/v1.1';
    }

    getMarkets(callback) {
        const options = {
            url: this.host,
            path: `/${this.path}/public/getMarkets`,
        };
        get(options, callback);
    }

    getMarketSummaries(callback) {
        const options = {
            url: this.host,
            path: `/${this.path}/public/getmarketsummaries`,
        };
        get(options, callback);
    }

    getMarketSummary(marketName, callback) {
        const options = {
            url: this.host,
            path: `/${this.path}/public/getmarketsummary`,
            params: {
                market: marketName,
            },
        };
        get(options, callback);
    }
}