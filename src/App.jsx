import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Purchase from './pages/Purchase'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout'
import ProceedCheckout from './pages/ProceedCheckout'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path='/Purchase' element={<Purchase />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Checkout" element={<Checkout />}></Route>
      <Route path="/Proceed" element={<ProceedCheckout />}></Route>
    </Routes>
  )
}

export default App
