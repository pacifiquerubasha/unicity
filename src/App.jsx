import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/basic.css";
import PredictorForm from '../components/PredictorForm'

function App() {

  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/predictor" element={<PredictorForm/>} />
            </Routes>        
    
        </BrowserRouter>
   
  )
}

export default App
