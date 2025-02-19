import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from "./components/home/Home"
import { About } from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'
import { githubInfoLoader } from './loader/githubIbfoLoader.js'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/> ,
//     children : [
//       {
//         path : "" ,
//         element : <Home/>
//       },
//       {
//         path : "about" ,
//         element : <About/>
//       },
//       {
//         path : "contact" ,
//         element : <Contact/>
//       },
//       {
//         path : "github" ,
//         element : <Github/>
//       },
//       {
//         path : "user/:userId",
//         element : <User/>
//       }
      
//     ]
//   }
// ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= { <Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route
         loader={githubInfoLoader}
         path='github' element={<Github />} />
        <Route path='user/:userId' element={<User />} />
      </Route>
    )
   )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
