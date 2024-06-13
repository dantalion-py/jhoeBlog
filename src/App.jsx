import { useState } from 'react'
import Home from './pages/home/Home'
import Information from './pages/infotmation/Information'
import NavBar  from './components/navBar/NavBar'
import Buttom from './components/button/Button'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <div className='bg-blue-200'>

        <NavBar/>
        <Home />
        <Footer />
      </div>
    </>

  )
}

export default App
