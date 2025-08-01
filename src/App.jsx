import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from './components/Products/Products';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProductPage from './components/ProductPage/ProductPage';
import '@fontsource/open-sans';
import '@fontsource/marcellus';


function App() {
  

  const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      { path: '/products', element: <Products/> },
      {path: '/product/:id', element: <ProductPage/>},
      
      {path: '*', element: <NotFound/>},
    ]},
  ])


  

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
