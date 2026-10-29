import { strict as assert } from "node:assert";
import { activity } from "./indexer";

const rows = activity([{ number: 1, hash: "0x1", transfers: [
  { from: "a", to: "b", value: 5n }, { from: "b", to: "c", value: 2n }
] }], "b");
assert.equal(rows.length, 2);
assert.deepEqual(rows.map(row => row.direction), ["in", "out"]);
console.log("BlockLens tests passed");
