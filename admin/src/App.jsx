import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { productColumns, userColumns } from './datatable';
import Home from './pages/Home/Home';
import List from './pages/Lists/List';
import Login from './pages/Login/Login';
import AddProduct from './pages/newProduct/AddProduct';
function App(props) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buyers' element={<List columns={userColumns}/>}/>
        <Route path='/products' element={<List columns={productColumns}/>}/>
        <Route path='/add-products' element={<AddProduct/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;