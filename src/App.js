import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RegisterUser from './components/Register_user/RegisterUser';
import RegisterClient from './components/Register_user/RegisterClient';
import Home from './components/home/Home';
import Login from './components/login/login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        {/* HACK reload stiles to diferent view forceRefresh={true}*/}
        <BrowserRouter forceRefresh={true}>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/home' element={<Home/>} ></Route>
            <Route path='/RegisterUser' element={<RegisterUser/>} ></Route>
            <Route path='/RegisterClient' element={<RegisterClient/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path="*" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;