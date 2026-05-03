import React from 'react'
import Navbar from './Components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar />}
    </>
  )
}

export default App
