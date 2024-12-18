import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

const App = () => {

  const queryClient = new QueryClient();
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Toaster richColors />
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App