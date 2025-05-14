


import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
// import Settings from './Pages/Settings'
import Profile from './Pages/Profile'

import Robos from './Components/Robos'
import Robo from './Components/Robo'
const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/settings" element={<Settings/>} /> */}
          <Route path="/robos" element={<Robos/>}></Route>
          <Route path="/profile/:username" element={<Profile/>}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/robo/:id" element={<Robo/>}></Route>
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
