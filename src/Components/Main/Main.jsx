import React from 'react'

import { Routes, Route } from 'react-router'
import { Navbar } from '../Navbar/Navbar'
import { Dashboard } from '../Dashboard/Dashboard'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import { Favorites } from '../Favorites/Favorites'
import { News } from '../News/News'
import Login from '../LoginLogout/Login'
import { CoinPage } from '../CoinPage/CoinPage'
import Footer from '../Footer/Footer'
export const Main = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/coins/:id" element={<CoinPage />} />
            

          </Routes>
        <Footer />
    </>
  )
}
