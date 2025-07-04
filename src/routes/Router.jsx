import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import VideoDetails from "../components/Videos/VideoDetails"
import SignIn from "../pages/SignIn"

const LayOut = () => {
  return(
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", element: <LayOut/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/video/:id", element: <VideoDetails/>},
        {path: "signin", element: <SignIn/>},
      ]
  }
])

function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router