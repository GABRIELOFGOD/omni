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
import Staking from "../pages/dashboard/Staking";

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
        path: "/admin",
        element: <Staking />
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
  }
]);