import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';
import HeroSection from './Components/Herosection';
import Banner from './Components/Banner';
import Stats from './Components/Stats';
import Aboutme from './Components/Aboutme';
import SkillSet1 from './Components/Skillset1';
import WorkExperience from './Components/Workexp';
// import Contact, { ContactUs } from './Components/ContactUs';
import { Services } from './Components/Services';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <HeroSection/>
    <Banner/>
    <Stats/>
    <Aboutme/>
    <Services/>
    <SkillSet1/>
    <WorkExperience/>
    <Banner/>
    {/* <ContactUs/> */}
    <Footer/>
  </React.StrictMode>
);
