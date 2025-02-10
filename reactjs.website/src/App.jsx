import { useEffect, useState } from 'react'
import{Card,Button  } from 'react-bootstrap'
import './App.css'
import Header from './Componets/header'
import {Spinner} from 'react-bootstrap'
import Popular_product from './Componets/popular-product'

function App() {


  return (
    <>
    <Header/>
     <Popular_product/> 
    </>
  )
}

export default App
