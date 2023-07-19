
import './App.css'
import { Routes, Route, useParams  } from "react-router-dom"
import { useState } from 'react'

 {/* Pages */} 
import SignUp from "./pages/signUp/SignUp"
import LogIn from "./pages/logIn/LogIn"
import Mentors from "./pages/mentors/Mentors"
import ProfilMentor from "./pages/profilMentor/ProfilMentor"
import ProfilAprenant from "./pages/profilAprenant/ProfilAprenant"
import Messages from "./pages/messages/Messages"
import NotFound from './pages/page404'
import About from "./pages/About"

{/* Components*/}
import NavBar from "./compnents/navbar/NavBar"
import Footer from "./compnents/footer/Footer"
import MentorCard from './compnents/mentorCard/MentorCard'
import TestimonialCard from './compnents/testimonialCard/TestimonialCard'
import ServiceContainer from './compnents/service/serviceContainer'
import HeaderText from "../src/compnents/HeaderText"
import FiltreButtons from "../src/compnents/filtreButtons"
import Hero from "./compnents/hero/Hero"
import MentorCardSlider from './compnents/mentorCard/MentorCardSlider'
import Search from"./compnents/search/Search"
import TestimonialCardSlider from './compnents/testimonialCard/TestimonialCardSlider'
import Form from "./compnents/Form"
import SelectButton from '../src/compnents/filtreButtons'




function App() {

  let mentorId = useParams()
  
  const [loginUser, setLoginUser] = useState(false)

  return (
    <>
      <div className="flex flex-col min-h-screen">

        <Routes>
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn setLoginUser={setLoginUser} />} />
          <Route path="/" element={
            <>
              <NavBar />
              <Hero />
              <div className="flex-grow flex flex-col items-center justify-center">
                <ServiceContainer />
              </div>
              <section className="flex-grow">
                <HeaderText text={"About us"} />
                <About />
              </section>
              <section className="flex-grow bg-[#f9fff5]">
                <HeaderText text={"Mentees testimonials"} />
                <TestimonialCardSlider />
              </section>
              {/* <section className="flex-grow bg-[#f9fff5]">
                <HeaderText text={"Best mentors "} />
                <MentorCardSlider />
              </section> */}
              <Footer />
            </>
          } />
          <Route path="/mentors" element={
            <Mentors/>
          } />

          <Route path="/messages" element={
            <>
              <NavBar />
              <Messages />
            </>
          } />
          <Route path="/profilAprenant" element={
          <>
            <NavBar />
            <ProfilAprenant />
            <Footer />
          </>
        } />
        <Route path="/profilMentor/:mentorId" element={
          <>
            <NavBar />
            <ProfilMentor />
            <Footer />
          </>
        } />

        </Routes >
      </div>
      
    </>
  )
}

export default App
