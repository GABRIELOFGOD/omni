import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/primary/Layout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Exchange from "../pages/dashboard/Exchange";
import Bridge from "../pages/dashboard/Bridge";
import OmniCoin from "../pages/dashboard/OmniCoin";
import Portfolio from "../pages/dashboard/Portfolio";
import Farm from "../pages/dashboard/Farm";
import Bonds from "../pages/dashboard/Bonds";
import Traders from "../pages/dashboard/Traders";
// import Staking from "../pages/dashboard/Staking";
import Admin from "../pages/Admin";
import Dashboard from "../pages/adminDashboard/Dashboard";
import User from "../pages/adminDashboard/User";
// import Withdrawal from "../pages/adminDashboard/Withdrawal";
// import WithdrawalReport from "../pages/adminDashboard/WithdrawalReport";
import Investments from "../pages/adminDashboard/Investments";
import Support from "../pages/adminDashboard/Support";
import AdminControl from "../pages/adminDashboard/AdminControl";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardHome />
      },
      {
        path: "/team",
        element: <Exchange />
      },
      {
        path: "/earnings",
        element: <Bridge />
      },
      {
        path: "/omnicoin",
        element: <OmniCoin />
      },
      {
        path: "/invest",
        element: <Portfolio />
      },
      {
        path: "/transactions",
        element: <Farm />
      },
      {
        path: "/bonds",
        element: <Bonds />
      },
      {
        path: "/traders",
        element: <Traders />
      }
    ]
  },
  {
    path: "dashboard",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <User />
      },
      // {
      //   path: "requests",
      //   element: <Withdrawal />
      // },
      // {
      //   path: "withrawal-report",
      //   element: <WithdrawalReport />
      // },
      {
        path: "investments",
        element: <Investments />
      },
      {
        path: "support",
        element: <Support />
      },
      {
        path: "control",
        element: <AdminControl />
      },
    ]
  },
]);