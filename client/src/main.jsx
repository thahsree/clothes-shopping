import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { authContext, AuthContextProvider } from './context/AuthContext';
import ErrorPage from './pages/ErrorPage';
import List from './pages/Lists/List';
import Login from './pages/Login/Login';
import Single from './pages/single/Single';
import Root from './Root/Root';





const ProtectedRoute = () => {

  const {user } = useContext(authContext)
  const location = useLocation()
  return (
    
    user ?<Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
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
        children:[
          {
            path:'',
            element:<List/>
          }
        ]
      },
      {
        path: '/products/:id',
        element: <Single />
      }
    ]

  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
