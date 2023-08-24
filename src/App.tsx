import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// theme
import { ThemeProvider } from '@mui/material';
import theme from './theme';
//components
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import Header from './components/Header';
//pageRoutes
import {HOME_PAGE, ADD_USER,EDIT_USER} from './common/PageRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>      
          <Route path={HOME_PAGE} element={<Home />}  />
          <Route path={EDIT_USER + '/:id'} element={<EditUser />} />
          <Route path={ADD_USER} element={<AddUser />} /> 
        </Routes> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
