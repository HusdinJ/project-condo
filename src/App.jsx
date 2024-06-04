import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Maskhead from './components/Maskhead'
import About from './components/About'
import Homepage from './components/Homepage'
import Concept from './components/Concept'
import Blueprint from './components/Blueprint'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Maskhead />
      <Homepage />
      <About />
      <Concept />
      <Blueprint />
      <Footer />
    </>
  )
}

export default App
