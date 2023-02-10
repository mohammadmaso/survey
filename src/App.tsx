import React, { useEffect, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Content, { NavBar } from './routes';
import store from './redux';
import './styles/App.css';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import './styles/nprogress.css';
import theme from './theme/theme';
import Fonts from './theme/Font';
import { ChakraProvider } from '@chakra-ui/react';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

function App() {
  useMemo(() => {
    nprogress.start();
  }, []);

  useEffect(() => {
    nprogress.done();
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <PWAInstallPrompt />
        <Router>
          <div className="sjs-client-app">
            {/* <header className="sjs-client-app__header">
              <img
                src={logo}
                className="sjs-client-app__logo"
                alt="logo"
                height={'50px'}
              />
              <NavBar />
            </header> */}
            <main className="sjs-client-app__content">
              <Content />
            </main>
            <footer className="sjs-client-app__footer"></footer>
          </div>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
