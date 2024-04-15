import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import VirtualDOM from './pages/VirtualDOM';
import Components from './pages/Components';
import Props from './pages/Props';
import NotFound from './pages/NotFound';
import State from './pages/State';
import LifeCycle from './pages/LifeCycle';
import Events from './pages/Events';
import Refs from './pages/Refs';
import Context from './pages/Context';
import ReactRouter from './pages/ReactRouter';
import Forms from './pages/Forms';
import Storages from './pages/Storages';
import HOC from './pages/HOC';
// создать index для pages

import ModeProvider from './providers/ModeProvider.js';


function App() {
    return (
        <ModeProvider>
            <Box sx={{ display: 'flex' }}>
                <nav>
                    <Routes>
                        <Route path="/" element={<Home />}>
                            <Route path="/" element={<Roadmap />} />
                            <Route path="/virtualDOM" element={<VirtualDOM />} />
                            <Route path="/components" element={<Components />} />
                            <Route path="/props" element={<Props />} />
                            <Route path="/state" element={<State />} />
                            <Route path="/lifeCycle" element={<LifeCycle />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/refs,Fragment,key,React.memo,useMemo" element={<Refs />} />
                            <Route path="/context" element={<Context />} />
                            <Route path="/react-router" element={<ReactRouter />} />
                            <Route path="/forms" element={<Forms />} />
                            <Route path="/storages" element={<Storages />} />
                            <Route path="/hoc" element={<HOC />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </nav>
            </Box>
        </ModeProvider>
    );
}

export default App;
