import React from 'react';
import Navbar from './Navbar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import Footer from './Footer';
import "../styles.css";
import "../response.css";

const App = () => {
  return (
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
        
    </div>
  )
}

export default App;