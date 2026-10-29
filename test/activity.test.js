import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeTransfer, walletActivity } from '../src/activity.js';

test('normalizes an incoming transfer for a wallet view', () => {
  const result = normalizeTransfer({ txHash: '0x1', logIndex: 2, blockNumber: '8', asset: 'PORT', from: '0xAAA', to: '0xBBB', value: 10, wallet: '0xbbb' });
  assert.deepEqual(result, { id: '0x1:2', txHash: '0x1', blockNumber: 8, asset: 'PORT', from: '0xaaa', to: '0xbbb', value: '10', direction: 'in' });
});

test('sorts wallet activity newest first', () => {
  const logs = [{ txHash: 'a', logIndex: 0, blockNumber: 4, from: 'x', to: 'w', value: 1 }, { txHash: 'b', logIndex: 0, blockNumber: 9, from: 'w', to: 'y', value: 2 }];
  assert.deepEqual(walletActivity(logs, 'w').map((x) => x.txHash), ['b', 'a']);
});
