import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
import Product from './components/Proudct/Product.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {path: '/', element: <Home />},
//       {path: '/about', element: <About />},
//       {path: '/contact', element: <Contact />},


      
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:userid' element={<User/>}/>
      <Route path='/github' element={<GitHub/>}/>
      <Route path='/products/:userid' element={<Product/>}
        // loader={async (params) => {
        //   // Fetch data here
        //   const response = await fetch("https://v6.exchangerate-api.com/v6/9ce05a012454b436def32303/latest/USD");
        //   const posts = await response.json();
        //   // return params;
        // }}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
