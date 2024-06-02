import { Route, createRoutesFromElements } from "react-router-dom";
import HomePage from "../../pages/Home";
import Layout from "../layout/layout";
import AdminDashboard from "../../pages/ProductDashboard";
import LogInPage from "../../pages/Login";

const ArrayRoute = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <AdminDashboard /> },
  { path: "/login", element: <LogInPage /> },
];

export const routes = createRoutesFromElements(
  <>
    {ArrayRoute?.map((i) => (
      <Route element={<Layout />}>
        <Route key={i?.path} path={i?.path} element={i?.element} />
      </Route>
    ))}
  </>
);
