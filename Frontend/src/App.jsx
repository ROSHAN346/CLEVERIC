import React from 'react'
import Home from './home/Home.jsx'
import Course from './components/Course.jsx'
import {Route} from 'react-router-dom' 

import './App.css'
import { Routes } from 'react-router-dom'
import Courses from './courses/Courses.jsx'
function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes >
      <Route path='/' element = {<Home/>} />
      <Route path='/course' element = {<Courses/>} />
    </Routes>
    </div>
  )
}

export default App
