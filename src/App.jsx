import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route/>
      <Route/>
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
      </Routes>
    </Router>
  );
}

export default App;

