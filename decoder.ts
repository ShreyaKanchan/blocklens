export type RawLog = { topic: string; data: string; blockNumber: number };
export type NormalizedTransfer = { blockNumber: number; from: string; to: string; value: bigint };
export function decodeTransfer(log: RawLog): NormalizedTransfer | null {
  if (log.topic !== "Transfer") return null;
  const [from, to, value] = log.data.split(":");
  if (!from || !to || !value) return null;
  return { blockNumber: log.blockNumber, from, to, value: BigInt(value) };
}
