import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import Protected from './components/Protected';
import Profile from './pages/Profile';
import Createlisting from './pages/Createlisting';
function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path ='/signin' element={<Signin/>}/>
        <Route path= '/signup' element={<Signup/>}/>
        <Route element={<Protected/>}>
          <Route path='/profile' element={<Profile/> }/> 
          <Route path='/create-listing' element={<Createlisting/>}/> 
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App