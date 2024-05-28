import { Route, createRoutesFromElements } from "react-router-dom";
import HomePage from "../../pages/Home";
import Products from "../../pages/Products";
import Layout from "../layout/layout";


 const ArrayRoute=[{path:'/',element:<HomePage/>},{path:'/product',element:<Products/>}]

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