import {
  Home,
  ApplicationCancel,
  BuyerApplication,
  SellerApplciation,
  ApplicationStatus,
} from "./pages";
import { Navbar, Container } from "./components";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/seller-application",
    element: <SellerApplciation />,
  },
  {
    path: "/buyer-application",
    element: <BuyerApplication />,
  },
  {
    path: "/application-cancel",
    element: <ApplicationCancel />,
  },
  {
    path: "/application-status",
    element: <ApplicationStatus />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Navbar />
    </>
  );
}

export default App;
