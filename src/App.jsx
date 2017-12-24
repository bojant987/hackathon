import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/store';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './Routes';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <main>
                    <Routes />
                </main>
                <Footer />
            </div>
        </Provider>
    );
};

export default App;