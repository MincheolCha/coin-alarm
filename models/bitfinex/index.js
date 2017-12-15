const { get } = require('../../helpers/restful');
const config = require('../../helpers/config.json');

const bitfinex = config.bitfinex;
module.exports = class Bitfinex {
    constructor() {
        this.host = bitfinex.host;
        this.path = 'v2'
    }

    getTickers(coinList, callback) {
        const symbols = coinList.toString();
        const options = {
            url: this.host,
            path: `/${this.path}/tickers`,
            params: {
                symbols
            },
        }
        get(options, callback);
    }
}