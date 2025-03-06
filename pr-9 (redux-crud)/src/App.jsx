import './App.css'
import Header from './Componets/Header'
import Home from './Componets/home'
import { Route, Routes } from 'react-router'
import AddNote from './Componets/AddNote'
import EditNote from './Componets/EditNote'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/add' element={<AddNote />} />
        <Route path='/edit/:id' element={<EditNote />} />
      </Routes>
    </>
  )
}
export default App;
