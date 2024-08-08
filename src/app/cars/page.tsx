import React from 'react'
import CarsAll from '@/components/cars-all/cars-all'
import CarsText from '@/components/cars-text/cars-text'
import CarouselLogo from '@/components/carousel-logo/carousel-logo'
import Footer from '@/components/footer/footer'
function Cars() {
    return (
        <section className='' >
            <CarsText />
            <CarsAll />
            <CarouselLogo />
            <Footer />
        </section>
    )
}

export default Cars