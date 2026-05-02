'use client';

import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { base, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo-project-id';

const metadata = {
  name: 'GOODLUMS',
  description: 'Post-Apocalyptic Internet Gang',
  url: 'https://normancomics.github.io/THEGOODLUMS',
  icons: ['https://normancomics.github.io/THEGOODLUMS/icon.png'],
};

const chains = [base, mainnet] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#00ff00',
    '--w3m-border-radius-master': '0px',
    '--w3m-color-mix': '#000000',
    '--w3m-font-family': 'VT323, monospace',
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
