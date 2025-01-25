import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Footer from './footer'
import PROMT from './query.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Navbar></Navbar>
          <PROMT></PROMT>
          <Footer></Footer>
    </>
  )
}

export default App
