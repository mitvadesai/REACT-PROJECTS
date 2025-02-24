import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/header'
import Home from './componets/home'
import { Route, Routes } from 'react-router'
import Addbook from './componets/Addbook'
import Editbook from './componets/Editbook'
import Viewbook from './componets/viewbook'

function App() {

  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Addbook />} />
        <Route path='/edit/:id' element={<Editbook />} />
        <Route path='/view/:id' element={<Viewbook />} />
      </Routes>
    </>
  )
}

export default App
