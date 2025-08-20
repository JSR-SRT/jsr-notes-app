import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

// named exports all files จาก Folder views
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Dashboard } from "./views/Dashboard";
import { NoteDetail } from "./views/NoteDetail";
import { Profile } from "./views/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "note/:id", element: <NoteDetail /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
