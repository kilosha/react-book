import React from 'react';
import MenuContext from '../contexts/MenuContext';

const MenuProvider = ({ children }) => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 280;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <MenuContext.Provider value={{ open, drawerWidth, handleDrawerOpen, handleDrawerClose }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;