import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import List from './pages/Lists/List';
import Login from './pages/Login/Login';
import Single from './pages/single/Single';
import Root from './Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<App/>,
      },
      {
        path:'/products',
        element:<List/>
      },
      {
        path:'/products/:id',
        element:<Single/>
      }
    ]
    
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
