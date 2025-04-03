import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Viewstory from './Components/Viewstory.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/story/:id/:tot",
        element:<Viewstory/>
    },
    

])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
