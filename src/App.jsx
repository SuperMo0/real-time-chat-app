import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router'
import Chats from './pages/Chats.jsx'
import Profile from './pages/Profile.jsx'
import People from './pages/People.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index='true' element={<Chats />}  ></Route>
        <Route path='/people' element={<People />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>

    </Routes>
  )
}

export default App
