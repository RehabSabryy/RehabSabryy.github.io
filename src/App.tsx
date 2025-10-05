import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Components/Home/Home"

let routers = createBrowserRouter([
  {path: "/", element: <Layout/> , children: [
    {index: true, element: <Home/>}
  ]},
])

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
