# BlockLens

> A block explorer and indexing prototype that turns transfer events into wallet-centric activity views.

![BlockLens](assets/logo.svg)

Small TypeScript block indexer model: normalize blocks, build address activity views, and query transfers.

```bash
npx tsx indexer.ts
```

## Architecture

The normalized `Block` model separates chain position, block identity, and transfer data. `activity` turns raw transfer records into a wallet-centric view with direction and source block, which is the foundation for a balances API or explorer UI.

## Production roadmap

Add RPC polling, confirmations, reorg handling, persistent checkpoints, ABI decoding, retry/backoff, metrics, and a database index. The current version is deterministic fixture-driven code for exploring indexing boundaries.
