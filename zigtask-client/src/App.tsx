import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Register from './pages/register';
import AuthRequirement from './pages/auth/AuthRequire';
import Authentication from './pages/auth';
import Main from './pages/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    element: <AuthRequirement />,
    children:[
      {
        element: <Authentication />,
        children:[
          {
            path: 'main',
            element: <Main/>
          }
        ]
      }
    ]
  }
])

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
