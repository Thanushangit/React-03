import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import RootLayout from './layout/RootLayout';
import Login from './pages/Login';
import ContactLayout from './layout/ContactLayout';
import Info from './components/Info';
import Form from './components/Form';
import NotFound from './pages/NotFound';
import UserLayout from './layout/UserLayout';
import Users from './pages/Users';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path='contact' element={<ContactLayout/>}>
            <Route path='info' element={<Info/>}/>
            <Route path='form' element={<Form/>}/>
        </Route>
        <Route path='users' element={<UserLayout/>}>
            <Route index  element={<Users/>}/>
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
