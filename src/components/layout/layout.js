import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import NavBar from '../../pages/NavBar';


const Layout = () => {
    return (
        <Grid container>
            <Grid item xs={12} className="sticky">
                <NavBar />
            </Grid>
            <Grid item xs={12}>
                <Outlet />
            </Grid>
        </Grid>
    );
};

export default Layout;
