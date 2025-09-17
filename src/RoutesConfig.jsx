import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Product from './components/Product'
import Wishlist from './Pages/Wishlist'

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      
    </Routes>
  )
}

export default RoutesConfig
