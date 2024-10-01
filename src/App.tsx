import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
