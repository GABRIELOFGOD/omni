import { RouterProvider } from "react-router-dom"
import { router } from "./utils/Router"
import { Toaster } from "sonner"

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Config, WagmiProvider } from 'wagmi';
import {
  bscTestnet
} from 'wagmi/chains';

const App = () => {

  const queryClient = new QueryClient();

  const config: Config = getDefaultConfig({
    appName: "Gpt bot",
    projectId: "gpt-bot",
    chains: [bscTestnet],
  });
  
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Toaster richColors />
            <RouterProvider router={router} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      {/* <Toaster richColors />
      <RouterProvider router={router} /> */}
    </div>
  )
}

export default App