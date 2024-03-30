import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';
import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerWidth }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const PageContent = () => {
    const theme = useTheme();
    const { open, drawerWidth } = useContext(MyContext);

    return (
        <Main open={open} drawerWidth={drawerWidth} theme={theme}>
            <DrawerHeader theme={theme} />
            <Outlet />
        </Main>
    );
};

export default PageContent;
