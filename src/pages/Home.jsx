import React from 'react';

import NavigationMenu from '../components/NavigationMenu';
import Header from '../components/Header';
import PageContent from '../components/PageContent';
import MenuProvider from '../providers/MenuProvider.js';

const Home = () => {
    return (
        <MenuProvider>
            <Header />
            <NavigationMenu />
            <PageContent />
        </MenuProvider>
    );
};

export default Home;
