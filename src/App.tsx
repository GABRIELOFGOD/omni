import { RouterProvider } from "react-router-dom"
import { router } from "./utils/Router"
import { Toaster } from "sonner"

const App = () => {
  return (
    <div>
      <Toaster richColors />
      <RouterProvider router={router} />
    </div>
  )
}

export default App