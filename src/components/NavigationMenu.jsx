import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Divider,
    Drawer,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';

import MenuContext from '../contexts/MenuContext';
import ModeContext from '../contexts/ModeContext.js';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

const NavigationMenu = () => {
    const location = useLocation();
    const theme = useTheme();
    const { open, drawerWidth, handleDrawerClose } = useContext(MenuContext);
    const { mode } = React.useContext(ModeContext);

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}>
                <DrawerHeader>
                    <Typography>Содержание</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[
                        { title: 'VirtualDOM', link: '/virtualDOM' },
                        { title: 'Components', link: '/components' },
                        { title: 'Props', link: '/props' },
                        { title: 'State(useState)', link: '/state' },
                        { title: 'LifeCycle(useEffect)', link: '/lifeCycle' },
                        { title: 'Events', link: '/events' },
                        {
                            title: 'Refs,Fragment,key,React.memo, useMemo',
                            link: '/refs,Fragment,key,React.memo,useMemo',
                        },
                        { title: 'Context(useContext)', link: '/context' },
                        { title: 'React Router V6', link: '/react-router' },
                        { title: 'Forms', link: '/forms' },
                        { title: 'Storages', link: '/storages' },
                        { title: 'HOC', link: '/hoc' },
                    ].map((item) => (
                        <ListItem key={item.title} disablePadding component={Link} to={item.link}>
                            <ListItemButton
                                sx={{
                                    color: mode === 'light' ? 'black' : 'white',
                                }}
                                selected={item.link === location.pathname}>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default NavigationMenu;
