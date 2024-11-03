import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Releases from "./routes/releases";
import GetStarted from "./routes/get_started";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "releases", element: <Releases /> },
      { path: "releases/:version", element: <Releases /> },
      { path: "get-started", element: <GetStarted /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
