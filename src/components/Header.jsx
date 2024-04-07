import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
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

const Header = ({ open, handleDrawerOpen, drawerWidth }) => {
    const navigate = useNavigate();

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
