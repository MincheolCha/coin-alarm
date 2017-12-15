const Bitfinex = require('./models/bitfinex');

const exchangeRate = 1089.5
const bitfinex = new Bitfinex();
const coinList = [
    'tBTCUSD',
    'tETHUSD',
]

bitfinex.getTickers(coinList, (error, result) => {

});

