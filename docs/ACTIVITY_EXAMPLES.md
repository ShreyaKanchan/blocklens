# Blocklens activity examples

Blocklens normalizes a transfer into a wallet-facing activity record. A useful consumer can use `direction` to render incoming and outgoing activity without interpreting the raw log again.

```js
const activity = walletActivity(logs, wallet);
const incoming = activity.filter((item) => item.direction === "in");
```

The test fixture in `test/activity.test.js` demonstrates normalization and newest-first ordering.
