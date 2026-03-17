import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustSection from "../components/TrustSection/TrustSection";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

import { useEffect, useState } from "react";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Enable or disable page scrolling when a modal window opens 
    useEffect( () => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <div>
            <Header/>
            <Hero openModal={() => setIsModalOpen(true)}/>
            <TrustSection/>
            <Services openModal={() => setIsModalOpen(true)}/>
            <Gallery/>
            <Footer openModal={() => setIsModalOpen(true)}/>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default Home;