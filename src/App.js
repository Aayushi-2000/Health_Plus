import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/common/common";
import NavBar from "./pages/NavBar";
import { Grid } from "@mui/material";
import './App.css';



const Router = createBrowserRouter(routes)

const Routing = () => {
    return (<>
    <RouterProvider router={ Router } >
        <Grid container >
            <Grid item xs={12} lgP={12} sm={12} className="sticky"> 
                <NavBar /></Grid>
        
        </Grid>
</RouterProvider>
    </>)
}

export default Routing;