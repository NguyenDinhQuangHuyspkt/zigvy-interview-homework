import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }]
)

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
