import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import MyNav from './components/MyNav';
import Home from './components/Home';
import BookTable from './components/BookTable';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book-table" element={<BookTable />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
