import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { SinglePage } from './Component/SinglePage'
import { GuideLines } from './Component/GuideLines'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<SinglePage/>}></Route>
        <Route path='Regulation' element={<GuideLines/>}></Route>
      </Routes>


    </>
  )
}

export default App
