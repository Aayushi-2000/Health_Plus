import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import NavBar from "../../pages/NavBar";

const Layout = () => {
  const location = useLocation();

  return (
    <Grid container>
      {location?.pathname !== "/login" ? (
        <Grid item xs={12} className="sticky">
          <NavBar />
        </Grid>
      ) : null}
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
