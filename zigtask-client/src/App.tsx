import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Register from './pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register/>
  }
])

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
