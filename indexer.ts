type Transfer = { from: string; to: string; value: bigint };
type Block = { number: number; hash: string; transfers: Transfer[] };

export function activity(blocks: Block[], address: string) {
  return blocks.flatMap(block => block.transfers
    .filter(t => t.from === address || t.to === address)
    .map(t => ({ block: block.number, direction: t.to === address ? "in" : "out", ...t })));
}

const blocks: Block[] = [{ number: 12, hash: "0xabc", transfers: [{ from: "0xalice", to: "0xbob", value: 25n }] }];
console.log(activity(blocks, "0xbob"));
