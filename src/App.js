import logo from './logo.svg';
import './App.css';
import Navbar from './conponents/Navbar';
import Home from './conponents/Home';
import { About } from './conponents/About';
import Project from './conponents/Project';
import Testimonial from './conponents/Testimonial';
import ContactUs from './conponents/ContactUs';
import Resume from './conponents/resume';
import { useState } from 'react';
import Sidebar from './conponents/Sidebar';
import Footer from './conponents/footer';

function App() {
  const [classactive,  setclassactive] = useState(false);

  return (
    <div  className={"App " + (classactive && "active" )}>
    <Navbar classactive={classactive} setclassactive = {setclassactive}/>
    <Sidebar/>

    <Home/>
    <About/>
    <Resume/>
    <Project/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    
    
    </div>
  );
}

export default App;
