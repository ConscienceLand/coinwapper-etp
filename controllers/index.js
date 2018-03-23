/**
 *description router class
 */
let express = require('express'),
    router = express.Router(),
    config = require('../config/config.js'),
    TxCtrl = require('./TxCtrl.js');

router.get('/txs', TxCtrl.listTxs);

exports.routes = router;
