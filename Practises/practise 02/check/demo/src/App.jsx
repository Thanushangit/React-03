import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Rootlayout from './Layouts/Rootlayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Info from './Pages/Info';
import Form from './Pages/Form';
import Users from './Pages/Users';
import Contactlayout from './Layouts/Contactlayout';
import Pagenotfound from './Pages/Pagenotfound';
import UsersLayout from './Layouts/UsersLayout';
import Userdata, { Usersingleloader } from './utils/Userdata';
import User from './Components/User';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} /> {/* Home as the main route */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contactlayout/>} >

            <Route path="info" element={<Info />} />
            <Route path="form" element={<Form />} />
        </Route>

        
        <Route path="product" element={<Product />} />
        <Route path="users" element={<UsersLayout/> }>
              <Route index element={<Users/>} loader={Userdata}/>
              <Route path=":id" element={<User/>} loader={Usersingleloader} />
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
