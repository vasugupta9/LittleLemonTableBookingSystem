import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import MyNav from './components/MyNav';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking.js';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book-table" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking /> }> </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
