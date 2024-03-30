import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home.jsx';
import VirtualDOM from './pages/VirtualDOM';
import Components from './pages/Components';
import Props from './pages/Props';
import NotFound from './pages/NotFound';





function App() {

    return (
        <Box sx={{ display: 'flex' }}>
            <nav>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/virtualDOM" element={<VirtualDOM />} />
                        <Route path="/components" element={<Components />} />
                        <Route path="/props" element={<Props />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </nav>
        </Box>
    );
}

export default App;
