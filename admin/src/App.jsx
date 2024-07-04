import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './components/Signup/SignUp';
import { authContext } from './context/AuthContext';
import { productColumns, userColumns } from './datatable';
import Home from './pages/Home/Home';
import List from './pages/Lists/List';
import Login from './pages/Login/Login';
import AddProduct from './pages/newProduct/AddProduct';
import UpdateProduct from './pages/updateProduct/UpdateProduct';
function App(props) {


  const { admin ,loading, dispatch } = useContext(authContext)

  const location = useLocation()
  
  const ProtectedRoute = () => {
    return (
      
      admin ?<Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
  }


  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />

          {/* protected routes */}

          <Route element={<ProtectedRoute/>}>

            <Route path='/' element={<Home />} />
            <Route path='/buyers' element={<List columns={userColumns} />} />
            <Route path='/products' element={<List columns={productColumns} />} />
            <Route path='/add-products' element={<AddProduct />} />
            <Route path='/update-products/:id' element={<UpdateProduct />} />

          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;