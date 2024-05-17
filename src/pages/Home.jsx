import React, { useState } from 'react'
import GamesList from './GamesList'
import { PacmanLoader } from 'react-spinners'
import Carousel from 'react-bootstrap/Carousel';
import ImageOne from '../assets/images/juego1.png';
import ImageTwo from '../assets/images/juego2.png';
import ImageThree from '../assets/images/juego3.png';
import ImageFourth from '../assets/images/juego4.png';
import ImageFifth from '../assets/images/juego5.png';
import ImageSixth from '../assets/images/juego6.png';
import ImageSeventh from '../assets/images/juego7.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bravas5 from "../assets/images/bravas5.png"


function Home() {
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <div >
      <div classname="patata-container" style={{ paddingTop: '150px' }}>
      <img src={Bravas5} alt="Bravas5" style={{width: "30px"}}/><h1 className="patata-title">Juegos Recomendados</h1><img src={Bravas5} alt="Bravas5" style={{width: "30px", }}/>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="pics" src={ImageOne} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="pics" src={ImageTwo} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="pics" src={ImageThree} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="pics" src={ImageFourth} text="Fourth slide" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="pics" src={ImageFifth} text="Fifth slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="pics" src={ImageSixth} text="Sixth slide" />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="pics" src={ImageSeventh} text="Seventh slide" />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    
    <GamesList />
    </div>
  )
}

export default Home
