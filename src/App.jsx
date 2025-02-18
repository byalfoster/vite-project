import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "./components/Card";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './App.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import bio1A from "./assets/images/cards/Bio1A.jpg";
import histograma1A from "./assets/images/cards/histograma1A.webp";
import clip2 from "./assets/images/cards/Clip2.webp";



export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className="embla__slide flex-shrink-0 min-w-[100px]">
                <Card
                  title="Resumen Biográfico"
                  imgSrc={bio1A}
                  h1="¡De generación en generación!"
                  description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
                />
              </div>
        </SwiperSlide>
        

      </Swiper>
    </>
  );
}
