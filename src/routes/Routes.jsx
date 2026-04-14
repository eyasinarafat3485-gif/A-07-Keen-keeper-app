import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timelinepage/Timeline";
import Stats from "../pages/stats/Stats";
import Errorpage from "../pages/errorpage/Errorpage";
import FriendsDetails from "../pages/friendDetails/friendsDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/friendsDetails/:id",
        Component: FriendsDetails ,
      },
      {
        path: "/stats",
        Component: Stats
      },
    ],
    errorElement: <Errorpage />
  },

]);