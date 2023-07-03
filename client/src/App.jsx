import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Routes/Home/Home'
import ListOfJobs from './components/ListOfJobs/ListOfJobs'
import WrongPath from './Routes/WrongPath'
import Acerca from './Routes/About/Acerca'
import Prices from './Routes/Prices/Prices'
import Support from './Routes/Support/Support'

function App() {
  return (

    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/prices' element={<Prices />} />
          <Route path='/support' element={<Support />} />
          <Route path='/user/:job' element={<ListOfJobs />} />
          <Route path='*' element={<WrongPath />} />
        </Routes>

        {/* Footer */}
      </BrowserRouter>
    </>
  )
}

export default App
