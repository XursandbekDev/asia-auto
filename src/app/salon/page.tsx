import Section from '@/components/section/section-salon/section-salon'
import React from 'react'
import SalonComponent from "@/components/salon-component/salon-component"
import CarouselLogo from '@/components/carousel-logo/carousel-logo'
import Footer from '@/components/footer/footer'
function Salon() {
    return (
        <>
            <Section />
            <SalonComponent />
            <CarouselLogo />
            <Footer />

        </>

    )
}

export default Salon