import React, { useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

import bio1A from "./assets/images/cards/Bio1A.jpg";
import Card from "./components/Card";

const carousel = (slider) => {
  const z = 500;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            <Card
              title="8Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide2">
            <Card
              title="7Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide3">
            <Card
              title="6Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide4">
            <Card
              title="5Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide5">
            <Card
              title="4Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide6">
            <Card
              title="3Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide3">
            <Card
              title="2Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          <div className="carousel__cell number-slide3">
            <Card
              title="1Resumen Biográfico"
              imgSrc={bio1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
