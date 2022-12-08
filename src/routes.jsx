import App from "./App";
import AddUser from "./pages/AddUser";
import User from "./pages/User";
import Weather from "./pages/Weather";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/adduser",
        element: <AddUser />,
      },
      {
        path: "/user",
        element: <User />,
      },

      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
];

export default routes;
