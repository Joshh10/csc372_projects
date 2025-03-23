
import React from 'react';
import '../../App.css';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';
import About from '../About';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <SectionOne />
            <About />
            <SectionTwo />
            <Footer />
           
        </>
    );
    
}

export default Home;