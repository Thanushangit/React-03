import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Rootlayout from './Layouts/Rootlayout';
import Home from './Pages/Home.jsx';
import About from './Pages/About';
import Product from './Pages/Product.jsx';
import Pagenotfound from './Pages/Pagenotfound.jsx';
import Login from './Pages/Login';
import Contactlayout from './Layouts/Contactlayout.jsx';
import Info from './Pages/Info.jsx';
import Form from './Pages/Form.jsx';
import UserLayout from './Layouts/UserLayout.jsx';
import { FetchSingleUser, FetchUser } from './Utils/FetchUser.jsx';
import Users from './Pages/Users.jsx';
import User from './Pages/User.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

const App = () => {

    const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<Rootlayout/>} errorElement={<Pagenotfound/>}>

          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='contact' element={<Contactlayout/>}>
                <Route path='info' element={<Info/>}/>
                <Route path='form' element={<Form/>}/>
          </Route>
          <Route path='users' element={<UserLayout/>} errorElement={<ErrorPage/>}>
                    <Route index element={<Users/>} loader={FetchUser}/>
                    <Route path='user/:id' element={<User/>} loader={FetchSingleUser}/>
          </Route>
          <Route path='login' element={<Login/>}/>
         </Route>
      )
    )

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  )
}

export default App