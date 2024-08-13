import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Hero } from './Component/Hero'
import { Award } from './Component/Award'
import { Information } from './Component/Information'
import { AboutUs } from './Component/AboutUs'
import { SinglePage } from './Component/SinglePage'
import { Register } from './Component/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<SinglePage/>}></Route>
        <Route path='Register' element={<Register/>}></Route>
      </Routes>


    </>
  )
}

export default App
