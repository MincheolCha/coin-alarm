const { get } = require('../restful');

function convertUSDTToKRW() {

}

function convertKRWToUSDT() {

}

function convertBTCToUSDT() {

}

function convertUSDTToBTC() {

}

function getCurrencyRate(from, to, callback) {
    const options = {
        url: 'http://api.manana.kr',
        path: `/exchange/rate/${from}/${to}.json`,
    };
    get(options, callback);
}

module.exports = {
    getCurrencyRate,
}