import { useState } from 'react'
import './App.css'
import FitAbouts from './components/headNav/about/About'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HeaderMain from './components/header/HeaderMain'
import HomePage from './components/headNav/Home/homePage'
import MainFooter from './components/footer/mainFooter'
import ContactForm from './components/main/contactForm'
import BmiFunction from './components/main/Bmi'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderMain/>
    <Routes>
      <Route path='/about' element={<FitAbouts/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path='/contact' element={<ContactForm />} />
      <Route path='/Bmi' element={<BmiFunction/>} />
    </Routes>
    <MainFooter/>
    </BrowserRouter>
    </>
  )
}

export default App
