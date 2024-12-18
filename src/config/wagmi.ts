// import { http, createConfig } from '@wagmi/core';
// import { bscTestnet } from 'wagmi/chains';
// import { injected } from '@wagmi/connectors';

// export const config = createConfig({
//   chains: [bscTestnet],
//   connectors: [injected()],
//   transports: {
//     [bscTestnet.id]: http(),
//   },
//   ssr: true,
// });


import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bscTestnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [bscTestnet],
});