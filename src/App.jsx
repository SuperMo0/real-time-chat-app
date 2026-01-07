import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import { Routes, Route, Navigate } from 'react-router'
import Chats from './pages/Chats.jsx'
import Profile from './pages/Profile.jsx'
import People from './pages/People.jsx'
import { useAuthStore } from './stores/auth.store.jsx';
import Login from './pages/Login.jsx'
import { ToastContainer } from 'react-toastify';




function App() {

  const { authUser, check } = useAuthStore();

  useEffect(() => {
    check();
  }, [])

  if (!authUser) return <Navigate to={"/login"} />   // with this line Chats renders twice in strict mode

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />}>
          <Route index='true' element={authUser && <Chats />}  ></Route>
          <Route path='/people' element={authUser && <People />}></Route>
          <Route path='/profile' element={authUser && <Profile />}></Route>
        </Route>
        <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />}></Route>
      </Routes>
    </>
  )
}

export default App
