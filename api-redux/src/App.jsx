import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
