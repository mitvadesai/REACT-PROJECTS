import './App.css'
import Header from './Componets/Header'
import Home from './Componets/home'
import { Route, Routes } from 'react-router'
import AddNote from './Componets/AddNote'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/add' element={<AddNote />} />
      </Routes>
    </>
  )
}
export default App;