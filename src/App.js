// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import AddSupplier from './component/AddSupplier';
import ViewSupplier from './component/ViewSupplier';
import Supplier from './component/Supplier';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Supplier />} />
        <Route path="/addSupplier" element={<AddSupplier />} /> 
        <Route path="/ViewSupplier" element={<ViewSupplier />} />
        <Route path="/Supplier" element={<Supplier/>}/>
      </Routes>
    </>
  );
}

export default App;
