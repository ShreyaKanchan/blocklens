import test from "node:test";
import assert from "node:assert/strict";
test("indexer fixture has a stable block identity", () => { const block = { number: 12, hash: "0xabc" }; assert.equal(block.hash.startsWith("0x"), true); assert.equal(Number.isInteger(block.number), true); });
