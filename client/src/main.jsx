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
import { authContext, AuthContextProvider } from './context/AuthContext';
import { DataContextProvider } from './context/DataContext';
import CartPage from './pages/Cart/CartPage';
import ErrorPage from './pages/ErrorPage';
import List from './pages/Lists/List';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Single from './pages/single/Single';
import Root from './Root/Root';





const ProtectedRoute = () => {

  const { user } = useContext(authContext)

  return (

    user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
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
      }
    ]

  },
  {
    path: '/cart',
    element: <CartPage />,
    errorElement: <ErrorPage />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <SnackbarProvider>
        <DataContextProvider>
          <RouterProvider router={router} />
        </DataContextProvider>
      </SnackbarProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
