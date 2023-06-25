
import './App.css'
import {Routes,Route} from "react-router-dom"

import NavBar from "./compnents/navbar/NavBar"
import SignUp from "./pages/signUp/SignUp"
import LogIn from "./pages/logIn/LogIn"
import Home from './pages/home/Home'
import Mentors from "./pages/mentors/Mentors"
import ProfilMentor from "./pages/profilMentor/ProfilMentor"
import ProfilAprenant from "./pages/profilAprenant/ProfilAprenant"
import Messages from "./pages/messages/Messages"
import Footer from "./compnents/footer/Footer"
import TestimonialCard from './compnents/testimonialCard/TestimonialCard'
import NotFound from './pages/page404'
import MentorCard from './compnents/mentorCard/MentorCard'
import About from "./pages/About"
import ServiceContainer from './compnents/serviceContainer'
import HeaderText from "../src/compnents/HeaderText"
import FiltreButtons from "../src/compnents/filtreButtons"
import Hero from "./compnents/hero/Hero"

import { useState } from 'react'



function App() {
const [loginUser, setLoginUser] = useState(false)
  return (
    <>
       <Routes>
          <Route path='/notFound' element={<NotFound />}/>
          <Route path='/signUp' element={ <SignUp/> } />
          <Route path='/logIn' element={<LogIn setLoginUser={setLoginUser}/>} />
          <Route path='/' element={  <><NavBar/> <Hero/> <Footer/></> } />
          <Route path='/mentors' element={<> <NavBar/> <Mentors/> <Footer/> </> } />
          <Route path='/profilAprenant' element={ <> <NavBar/> <ProfilAprenant/> <Footer/> </>  } />
          <Route path='/profilMentor' element={ <><NavBar/> <ProfilMentor/> <Footer/></> } />
          <Route path='/messages' element={<> <NavBar/> <Messages/> </> } />
       </Routes>
      
    </>
  )
}

export default App
