import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Tetris from "./pages/tetris/Tetris"
import Main from "./pages/Main"
import About from "./pages/About"

function App() {
  const router = createBrowserRouter([
    {
      path: "/game",
      element: <Tetris />,
    },
    {
      path: "/",
      element: <Main />,
      errorElement: <div className="flex justify-center items-center h-[100dvh]"> Error! Page Not Found</div>
    },
    {
      path: "/about",
      element: <About />,
    },
  ])

  return (
    <div className="flex flex-col justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
