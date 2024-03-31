import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ModeContext, { modes } from '../contexts/ModeContext';
import getMode from '../helpers/getMode';

const ModeProvider = ({ children }) => {
    const [mode, setMode] = React.useState(() => getMode(modes));
    const theme = createTheme({
        palette: {
            mode,
        },
    });

    React.useEffect(() => {
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ModeContext.Provider value={{ toggleColorMode, mode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ModeContext.Provider>
    )
}

export default ModeProvider;