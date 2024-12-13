import React from 'react'
import Home from './home/Home.jsx'
import Course from './components/Course.jsx'
import {Navigate, Route } from 'react-router-dom'
import { useAuth } from './context/AuthProvider.jsx'
import {Toaster} from "react-hot-toast"

import './App.css'
import { Routes } from 'react-router-dom'
import Courses from './courses/Courses.jsx'
import About from './About/About.jsx'
import SignUp from './components/Signup.jsx'


function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes >
      <Route path='/' element = {<Home/>} />
      <Route path='/course' element = {authUser? <Courses/> : <Navigate to = "/signup"/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/signup' element = {<SignUp/>} />
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
