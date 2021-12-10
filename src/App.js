import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RegisterUser from './components/Register_user/RegisterUser';
import Home from './components/home/Home';
import Login from './components/login/login';
import LoginAdmin from './components/LoginAdmin/loginAdmin';
import HomeAdmin from './components/homeAdmin/homeAdmin';
import Update from './components/updateClient/updateClient';
import { Search } from './components/search/Search';
import { DataProvider } from '../src/context/DataProvider'
import "boxicons";
import PagosApp from './components/Pagos/pagosApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <DataProvider>
      <div className="App">
        {/* HACK reload stiles to diferent view forceRefresh={true}*/}
        <BrowserRouter forceRefresh={true}>
          <Routes>
            <Route path='/' element={<Search/>} ></Route>
            <Route path='/home' element={<Home/>} ></Route>
            <Route path='/RegisterUser' element={<RegisterUser/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/loginAdmin' element={<LoginAdmin/>} ></Route>
            <Route path='/homeAdmin' element={<HomeAdmin/>} ></Route>
            <Route path='/search' element={<Search />} ></Route>
            <Route path='/update' element={<Update />} ></Route>
            <Route path="*" element={<Search />} ></Route>
            <Route path='/pagos' element={<PagosApp />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
      </DataProvider>

    );
  }
}

export default App;