export function normalizeTransfer(log) {
  if (!log.from || !log.to || log.value == null) throw new Error('incomplete transfer log');
  return {
    id: `${log.txHash}:${log.logIndex}`,
    txHash: log.txHash,
    blockNumber: Number(log.blockNumber),
    asset: log.asset ?? 'UNKNOWN',
    from: log.from.toLowerCase(),
    to: log.to.toLowerCase(),
    value: String(log.value),
    direction: log.wallet?.toLowerCase() === log.to.toLowerCase() ? 'in' : 'out',
  };
}

export function walletActivity(logs, wallet) {
  return logs.map((log) => normalizeTransfer({ ...log, wallet })).filter((item) => item.from === wallet.toLowerCase() || item.to === wallet.toLowerCase()).sort((a, b) => b.blockNumber - a.blockNumber);
}
