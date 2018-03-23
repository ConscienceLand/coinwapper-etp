var requestify = require('requestify');
var Message = require('../models/message');
var Mvsd = require('../models/Mvsd.js');

let service = {
    listTxs: listTxs,
};

function listTxs(req, res) {
    let addresses = req.param('address');
	if(!Array.isArray(addresses))
		  addresses=new Array(addresses);
    Mvsd.fetchHistory(addresses[0])
        .then((deposits) => {
            console.info("list %i deposits for %s", deposits.length, addresses[0]);
            res.status(200).json(Message.success(deposits, 'SUC_LIST_DEPOSITS'));
        })
        .catch((error) => {
            res.status(400).json(Message.error(error.message));
        });
}

module.exports = service;
