import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/root";

const router = createHashRouter([{ path: "/", element: <Root /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
