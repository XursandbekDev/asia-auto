import Section from '@/components/section/home-section/home-section';
import React from 'react';
import HomeMain from '@/components/main/home-main/home-main';
import HomeCars from '@/components/cars-map/home-cars';
// import LogoAnimation from "@/components/logo-animation/logo-animation"
import CarouselLogo from '@/components/carousel-logo/carousel-logo';
import Footer from '@/components/footer/footer';
function Home() {
  return (
    <body>
      <section className='background-class -z-30 absolute top-0 left-0 bg-no-repeat bg-cover w-full   ' >

        <div className=" lg:h-[880px]  w-full bg-no-repeat bg-cover">
          <Section />
          <HomeMain />
          <HomeCars />
          <CarouselLogo />
          <Footer/>
        </div>
      </section>
      <main>
      </main>
    </body>

  );
}

export default Home;

