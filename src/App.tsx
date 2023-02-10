import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Content, { NavBar } from './routes';
import store from './redux';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="sjs-client-app">
          <main className="sjs-client-app__content">
            <Content />
          </main>
          <footer className="sjs-client-app__footer"></footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
