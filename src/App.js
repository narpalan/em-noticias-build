import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import AppProvider from './context/Provider';
import Main from './pages/Main';
//import Header from './components/Header/Header';


function App() {
  const theme = {};
  return (
    <AppProvider>
      <ThemeProvider theme={ theme }>
        <Routes>
          <Route path="/" element={ <Main/> }/>
        </Routes>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
