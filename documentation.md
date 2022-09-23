# Documentation

All WojakFinance pairs consist of two different tokens. DOGE is not a native currency in WojakFinance, and is represented only by WDOGE in the pairs. 

The canonical WDOGE address used by the WojakFinance interface is `0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api.wojak.fi/api/summary)

Returns data for the top ~1000 WojakFinance pairs, sorted by reserves. 

### Request

`GET https://api.wojak.fi/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_DOGE": "..."          // liquidity denominated in DOGE
    },
    // ...
  }
}
```

## [`/tokens`](https://api.wojak.fi/api/tokens)

Returns the tokens in the top ~1000 pairs on WojakFinance, sorted by reserves.

### Request

`GET https://api.wojak.fi/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_DOGE": "...",             // price denominated in DOGE
    },
    // ...
  }
}
```

## [`/tokens/0x...`](https://api.wojak.fi/api/tokens/0x570C41a71b5e2cb8FF4445184d7ff6f78A4DbcBD)

Returns the token information, based on address.

### Request

`GET https://api.wojak.fi/api/tokens/0x570C41a71b5e2cb8FF4445184d7ff6f78A4DbcBD`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_DOGE": "...",               // price denominated in DOGE
  }
}
```

## [`/pairs`](https://api.wojak.fi/api/pairs)

Returns data for the top ~1000 WojakFinance pairs, sorted by reserves.

### Request

`GET https://api.wojak.fi/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of DOGE and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_DOGE": "..."          // liquidity denominated in DOGE
    },
    // ...
  }
}
```
