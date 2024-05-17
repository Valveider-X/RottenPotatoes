import React, { useState } from "react";
import GamesList from "./GamesList";
import { PacmanLoader } from "react-spinners";
import Carousel from "react-bootstrap/Carousel";
import ImageOne from "../assets/images/juego1.png";
import ImageTwo from "../assets/images/juego2.png";
import ImageThree from "../assets/images/juego3.png";
import ImageFourth from "../assets/images/juego4.png";
import ImageFifth from "../assets/images/juego5.png";
import ImageSixth from "../assets/images/juego6.png";
import ImageSeventh from "../assets/images/juego7.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Bravas5 from "../assets/images/bravas5.png";
import { Navigate } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="patata-container" style={{ paddingTop: "150px" }}>
        <img src={Bravas5} alt="Bravas5" style={{ width: "30px" }} />
        <h1 className="patata-title">Juegos Recomendados</h1>
        <img src={Bravas5} alt="Bravas5" style={{ width: "30px" }} />
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carrousel-container">
          <a href="https://mdasier.github.io/patataDice/">
            <img className="pics" src={ImageOne} text="First slide" />
          </a>
          <Carousel.Caption>
            <h3>PatataDice</h3>
            <p>
              Un giro innovador al clasico simon dice con algunos guiños
              escondidos, hecho por Asier nuestro crack local y el amo del
              Bloste.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <a href="https://ronniedetal.github.io/testeo-game/">
          <img className="pics" src={ImageTwo} text="Second slide" />
          </a>
          <Carousel.Caption>
            <h3>Manolo Space</h3>
            <p>
              La obra maestra aclamada por todo el bootcamp hecha por Ronnie,
              aqui en RottenPotatoes tenemos una exlusiva primicia sobre el
              futuro de la saga.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://roigoriol.github.io/Mr-Potato-strikes-back/">
          <img className="pics" src={ImageThree} text="Third slide" />
          </a>
          <Carousel.Caption>
            <h3>Mr Potato strikes back</h3>
            <p>
              Mr potato entra en un estado de furia canibalistica y quiere
              acabar con las patatas que le traicionaron juego hecho por Oriol,
              el genio del Padalustro.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://lamardemuela.github.io/peperoni-project-game/">
          <img className="pics" src={ImageFourth} text="Fourth slide" />
          </a>
          <Carousel.Caption>
            <h3>Peperoni Project Game</h3>
            <p>
              Un juego con unos graficos que con solo verlos te da hambre y un
              gameplay satisfactorio hecho por nuestra compañera Agueda.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://marcossfh.github.io/zombie-piledriver/">
          <img className="pics" src={ImageFifth} text="Fifth slide" />
          </a>
          <Carousel.Caption>
            <h3>Zombie Pile Driver</h3>
            <p>
              Un juego frenetico con una gran banda sonora lo unico mas grande
              es la furia del protagonista hacia los zombies hecho por Marcos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://valveider-x.github.io/Super-Sculptr/">
          <img className="pics" src={ImageSixth} text="Sixth slide" />
          </a>
          <Carousel.Caption>
            <h3>Super Sculptr</h3>
            <p>
              Una gran entrada en el genero de los juegos exponenciales en el
              que hacienda es tu mayor enemigo un reflejo de la vida real vamos
              hecha por Xavi.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://alfom17.github.io/grid-hell/">
          <img className="pics" src={ImageSeventh} text="Seventh slide" />
          </a>
          <Carousel.Caption>
            <h3>Grid Hell</h3>
            <p>
              Un vuelta de tuerca al genero bullet hell, un espiritu que debe
              esquivar los rayos de un dios furioso y salvar su condenada Alma,
              hecho por nuestro compañero Alfonso, un grande de la industria.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <GamesList />
    </div>
  );
}

export default Home;
