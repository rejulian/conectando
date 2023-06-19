import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  return (

    <>
       <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
        
        {/* Footer */}
       </BrowserRouter>
    </>
  )
}

export default App
