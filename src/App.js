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
                        <Route path="/react-book" element={<Home />}>
                            <Route path="/react-book/roadmap" element={<Roadmap />} />
                            <Route path="/react-book/virtualDOM" element={<VirtualDOM />} />
                            <Route path="/react-book/components" element={<Components />} />
                            <Route path="/react-book/props" element={<Props />} />
                            <Route path="/react-book/state" element={<State />} />
                            <Route path="/react-book/lifeCycle" element={<LifeCycle />} />
                            <Route path="/react-book/events" element={<Events />} />
                            <Route path="/react-book/refs,Fragment,key,React.memo,useMemo" element={<Refs />} />
                            <Route path="/react-book/context" element={<Context />} />
                            <Route path="/react-book/react-router" element={<ReactRouter />} />
                            <Route path="/react-book/forms" element={<Forms />} />
                            <Route path="/react-book/storages" element={<Storages />} />
                            <Route path="/react-book/hoc" element={<HOC />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </nav>
            </Box>
        </ModeProvider>
    );
}

export default App;
