
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/about/about";
import Community from "./components/community/community.jsx"
import Register from "./components/register/register.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Community",
    element: <Community />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
