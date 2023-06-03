
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {

  return (
    <>
       <NavBar/>
       <Routes>
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/mentors' element={<Mentors/>} />
          <Route path='/profilAprenant' element={<ProfilAprenant/>} />
          <Route path='/profilMentor' element={<ProfilMentor/>} />
          <Route path='/messages' element={<Messages/>} />
       </Routes>
       <Footer/>
    </>
  )
}

export default App
