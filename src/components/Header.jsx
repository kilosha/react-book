import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar, Typography, IconButton, AppBar as MuiAppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

import MenuContext from '../contexts/MenuContext';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme, open, drawerWidth }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Header = () => {
    const navigate = useNavigate();
    const { open, drawerWidth, handleDrawerOpen } = useContext(MenuContext);

    const navToHomePage = () => {
        navigate('/');
    };

    return (
        <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                    <MenuIcon />
                </IconButton>
                <Typography
                    sx={{ cursor: 'pointer' }}
                    variant="h6"
                    noWrap
                    component="div"
                    onClick={navToHomePage}>
                    React book
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
