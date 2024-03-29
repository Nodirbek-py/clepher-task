import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Task from "../pages/Task";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);
