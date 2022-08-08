import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Savdo from './Pages/Savdo'
import Mahsulotlar from './Pages/Mahsulotlar' 
import Savatcha from './Pages/Savatcha' 
import Sotilganlar from './Pages/Sotilganlar' 
import Login from './components/LoginPage'
import Add from './components/Mah_Item/Add'
import Edit from './components/Mah_Item/Edit'
import SotibOlish from './Pages/SotibOlish'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Login />
      <Routes>
        <Route path='/' element={<Savdo/>}/>
        <Route path='/sotibolish/:id' element={<SotibOlish/>}/>
        <Route path='/mahsulotlar' element={<Mahsulotlar/>} />
        <Route path='/mahsulotlar/qoshish' element={<Add/>} />
        <Route path='/mahsulotlar/edit/:id' element={<Edit/>} />
        <Route path='/savatcha' element={<Savatcha/>} />
        <Route path='/mahsulotlar/sotilganlar' element={<Sotilganlar/>} />
      </Routes>
      
    </div>
  )
}

export default App