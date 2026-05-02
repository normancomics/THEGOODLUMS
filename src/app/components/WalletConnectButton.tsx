'use client';

import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { ChunkyButton } from './ChunkyButton';

export function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span
          className="text-xs px-3 py-2 border-2 border-green-400 text-green-400 font-courier"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <ChunkyButton variant="secondary" onClick={() => disconnect()}>
          DISCONNECT
        </ChunkyButton>
      </div>
    );
  }

  return (
    <ChunkyButton variant="primary" onClick={() => open()}>
      CONNECT WALLET
    </ChunkyButton>
  );
}
