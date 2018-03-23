let rp = require('request-promise'),
    config = require('../config/mvsd.js');

let service = {
    getNewAccount: getNewAccount,
    importAccount: importAccount,
    listBalances: listBalances,
    listAssets: listAssets,
    listTxs: listTxs,
    send: send,
    broadcastTx: broadcastTx,
    sendFrom: sendFrom,
    sendAsset: sendAsset,
    sendAssetFrom: sendAssetFrom,
    fetchHeight: fetchHeight,
    fetchHistory: fetchHistory
};

function fetchHistory(address) {
    return _send('fetch-history', ['--PAYMENT_ADDRESS', address]);
}

function getNewAccount(username, password, language) {
    if (typeof language == 'undefined')
        language = 'en';
    return _send('getnewaccount', [username, password, '-l', language]);
}

function importAccount(username, password, language, mnemonic, hd_index) {
    if (typeof language == 'undefined')
        language = 'en';
    return _send('importaccount', ['-n', username, '-p', password, '-l', language, '-i', hd_index, mnemonic]);
}

function fetchHeight() {
    return _send('fetch-height', []);
}

function broadcastTx(raw) {
    return _send('sendrawtx', [raw, '-f', 10001]);
}
function listBalances(username, password) {
    return _send('listbalances', [username, password]);
}

function listAssets(username, password) {
    return _send('listassets', [username, password]);
}

function send(username, password, recipent, quantity) {
    return _send('send', [username, password, recipent, quantity]);
}

function sendFrom(username, password, quantity, recipent, from_address) {
    return _send('sendfrom', [username, password, from_address, recipent, quantity]);
}

function sendAsset(username, password, symbol, recipent, quantity) {
    return _send('sendasset', [username, password, recipent, symbol, quantity]);
}

function sendAssetFrom(username, password, symbol, quantity, recipent, from_address) {
    return _send('sendassetfrom', [username, password, from_address, recipent, symbol, quantity]);
}

function listTxs(username, password, asset_type) {
    let params = [username, password];
    if (asset_type)
        params = params.concat(['-s', asset_type]);
    return _send('listtxs', params);
}

function _send(method, params) {
     let options = {
          uri: 'http://' + config.host + ':' + config.port + '/rpc',
          method: 'POST',
          json: true //parse result
     };

    options.body = {
        method: method,
        params: params
    };
    return rp(options);
}

module.exports = service;
