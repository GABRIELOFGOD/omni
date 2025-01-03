import { Outlet } from "react-router-dom"
import Footer from "../../components/primary/Footer"
import Header from "../../components/primary/Header"
import Sidebar from "../../components/primary/Sidebar"

const Dashboard = () => {
  return (
    <div>
      <div className="h-screen">
        <Header />
        <div className="flex h-screen">
          <Sidebar />
          <div className="w-full p-2">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard