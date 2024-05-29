import { Route, createRoutesFromElements } from "react-router-dom";
import HomePage from "../../pages/Home";
import Products from "../../pages/Products";
import Layout from "../layout/layout";
import AdminDashboard from "../../pages/AdminDashboard";


 const ArrayRoute=[{path:'/',element:<HomePage/>},{path:'/product',element:<Products/>},{path:'/dashboard',element:<AdminDashboard/>}]

 export const routes = createRoutesFromElements(
    <>
    {ArrayRoute?.map(i=>

        (    
            <Route element={<Layout />}>
        <Route key={i?.path} path={i?.path} element={i?.element} />
        </Route >)
    )}
  
   
    </>
  );