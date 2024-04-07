import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Typography, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

const NavigationMenu = ({ open, handleDrawerClose, drawerWidth }) => {
    const theme = useTheme();

    // const DrawerList = (
    //     <Box role="presentation">
    //         <Toolbar>
    //             <Typography variant="h6" noWrap component="div">
    //                 Permanent drawer
    //             </Typography>
    //         </Toolbar>
    //         <Divider />
    //         <List>
    //             {[
    //                 'VirtualDOM',
    //                 'Components',
    //                 'Props',
    //                 'State(useState)',
    //                 'LifeCycle(useEffect)',
    //                 'Events',
    //                 'Refs,Fragment,key,React.memo, useMemo',
    //                 'Context(useContext)',
    //                 'React Router V6',
    //                 'Forms',
    //                 'Storages',
    //                 'HOC',
    //             ].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <NavLink to="/virtualDOM" activeClassName="active">
    //                         <ListItemText primary={text} />
    //                     </NavLink>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // );

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
                        { title: 'VirtualDOM', link: 'virtualDOM' },
                        { title: 'Components', link: 'components' },
                        { title: 'Props', link: 'props' },
                        { title: 'State(useState)', link: 'state' },
                        { title: 'LifeCycle(useEffect)', link: 'lifeCycle' },
                        { title: 'Events', link: 'events' },
                        {
                            title: 'Refs,Fragment,key,React.memo, useMemo',
                            link: 'refs,Fragment,key,React.memo,useMemo',
                        },
                        { title: 'Context(useContext)', link: 'context' },
                        { title: 'React Router V6', link: 'react-router' },
                        { title: 'Forms', link: 'forms' },
                        { title: 'Storages', link: 'storages' },
                        { title: 'HOC', link: 'hoc' },
                    ].map((item, index) => (
                        <ListItem
                            key={item.title}
                            disablePadding
                            component={NavLink}
                            to={item.link}>
                            <ListItemButton>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            ;
        </>
    );
};

export default NavigationMenu;
