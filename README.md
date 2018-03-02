# coinwapper-etp
Blockchain coinwrapper for ETP

# Purpose
This wrapper should provide an API to interact with the Metaverse Blockchain to implement a common interface that can also be used for various other Blockchains.

# API Entpoints
## Statement of transactions of address(es)
/statement?address=MGqHvbaH9wzdr6oUDFz4S1HptjoKQcjRve&address=ADDRESS2&min_height=0&max_height=1000
Result:
```
{
  "status": {
    "success": 1
  },
  "result": [
      {      "symbol": "ETP",
              "decimals": 8,
              "address": "MGqHvbaH9wzdr6oUDFz4S1HptjoKQcjRve",
              "amount": -5000000000000000,
              "hash": "667b80465094b8de303fa3bcc7d030f6a91222eda80b37e60284c1468360bd68",
              "timestamp": 1486831953,
              "height": 3611
      },
      {
              "symbol": "ETP",
              "decimals": 8
              "address": "MgqHvbaH9wzdr6oUDFz4S1HptjoKQcjRve",
              "amount": 5000000000000000,
              "hash": "2a845dfa63a7c20d40dbc4b15c3e970ef36332b367500fd89307053cb4c1a2c1",
              "timestamp": 1486796400,
              "height": 0
      }
    ],
    "count": 2,
    "page": 0,
    "items_per_page": 10
  }
}
```
