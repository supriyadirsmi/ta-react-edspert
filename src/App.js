import React from 'react';
import '../src/assets/css/global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Detail from './pages/Detail';

const routeList = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home/>
    }, 
    {
      path: 'detail/:id', 
      element: <Detail/>
    }
  ]
}])


function Index() {
  return (
    <RouterProvider router={routeList} />
  )
}

export default Index
