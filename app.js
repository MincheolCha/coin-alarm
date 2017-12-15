const Bitfinex = require('./models/bitfinex');
const Bittrex = require('./models/bittrex');
const async = require('async');

const {
    getCurrencyRate,
} = require('./helpers/utils');

const exchangeRate = 1089.5
const bitfinex = new Bitfinex();
const bitfinexMarketList = [
    'tBTCUSD',
    'tETHUSD',
]

const bittrex = new Bittrex();
const bittrexMarketList = [
    'USDT-BTC'
];


function getMarketValue(marketName, marketInfos, currencyRate, callback) {
    async.waterfall([
        done => bittrex.getMarketSummary(marketName, done)
    ], (error, marketInfo) => {
        if (marketInfo) {
            marketInfos.push(marketInfo.result[0]);
        }
        return callback(null)
    })
}

function evaluateMarkets(marketList, currencyRate, callback) {
    const marketInfos = [];
    async.each(marketList, (marketName, done) => {
        getMarketValue(marketName, marketInfos, currencyRate, done);
    }, eachError => callback(eachError, marketInfos));
}

function evaluate(marketList) {
    let currencyRate;

    async.waterfall([
        done => getCurrencyRate('KRW', 'USD', (error, currencyInfo) => {
            currencyRate = currencyInfo[0].rate;
            return done(null);
        }),
        done => evaluateMarkets(marketList, currencyRate, done),
    ], (error, marketInfos) => {
        console.log(marketInfos);
    });
}

evaluate(bittrexMarketList);
