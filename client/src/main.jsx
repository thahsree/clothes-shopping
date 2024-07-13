import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { SnackbarProvider } from 'notistack';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider
} from "react-router-dom";
import { authContext, AuthContextProvider } from './context/AuthContexts';
import { ModeContextProvider } from './context/DarkMode';
import { DataContextProvider } from './context/DataContext';
import { LoadingContextProvider } from './context/LoadingContext';
import CartPage from './pages/Cart/CartPage';
import ErrorPage from './pages/ErrorPage';
import List from './pages/Lists/List';
import Login from './pages/Login/Login';
import Orders from './pages/OrderPage/Orders';
import Signup from './pages/Signup/Signup';
import Single from './pages/single/Single';
import WishList from './pages/wishList/WishList';
import Root from './Root/Root';





const ProtectedRoute = () => {

  const { user } = useContext(authContext)

  return (

    user ? <Outlet /> : <Navigate to='/login' />
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/products',
        //add protected route here
        children: [
          {
            path: '',
            element: <List />
          }
        ]
      },
      {
        path: '/products/:id',
        element: <Single />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: '/signup',
        element: <Signup />,
        errorElement: <ErrorPage />
      },
      {
        path: '/wishlist',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            element: <WishList />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path:'/orders',
        errorElement:<ErrorPage/>,
        children:[
          {
            path:'',
            element:<Orders/>,
            errorElement:<ErrorPage />
          }
        ]
      }

    ]

  },
  {
    path: '/cart',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <CartPage />,
        errorElement: <ErrorPage />
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <SnackbarProvider>
        <DataContextProvider>
          <LoadingContextProvider>

            <ModeContextProvider>
              
              <RouterProvider router={router} />

            </ModeContextProvider>
          </LoadingContextProvider>
        </DataContextProvider>
      </SnackbarProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
