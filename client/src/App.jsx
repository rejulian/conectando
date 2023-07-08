import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Routes/Home/Home'
import ListOfJobs from './components/ListOfJobs/ListOfJobs'
import WrongPath from './Routes/WrongPath/WrongPath'
import Acerca from './Routes/About/Acerca'
import Prices from './Routes/Prices/Prices'
import Support from './Routes/Support/Support'
import UserDetail from './Routes/UserDetail/UserDetail'
import Footer from './components/Footer/Footer'
import UserRegister from './Routes/Register/UserRegister'

function App() {
  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Register */}
          <Route path='/register/user' element={<UserRegister/>}/>

          {/* ************ */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Acerca />} />
          <Route path='/prices' element={<Prices />} />
          {/* <Route path='/support' element={<Support />} /> */}
          <Route path='/job/:job' element={<ListOfJobs />} />
          <Route path='/user/:id' element={<UserDetail />} />
          <Route path='*' element={<WrongPath />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
