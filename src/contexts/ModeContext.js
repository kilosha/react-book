import React from 'react';

export const modes = {
    dark: "dark",
    light: "light"
}

const ModeContext = React.createContext({ toggleColorMode: () => { } });

export default ModeContext;