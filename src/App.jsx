import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Job from './pages/Job'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Application from './pages/Application'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/job/:id' element={<Job />} />
            <Route path='/apply/:id' element={<Application />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
