import React from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import NavigationMenu from '../components/NavigationMenu';
import Header from '../components/Header';
import PageContent from '../components/PageContent';
import SomeContext from '../contexts/SomeContext';

import { styled } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const drawerWidth = 260;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <SomeContext.Provider value={{ open, drawerWidth }}>
            <Header open={open} handleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} />

            <NavigationMenu
                open={open}
                handleDrawerClose={handleDrawerClose}
                drawerWidth={drawerWidth}
            />
            <PageContent />
        </SomeContext.Provider>
    );
};

export default Home;
