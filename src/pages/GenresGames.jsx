import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import Button from "react-bootstrap/Button";

function GenresGames() {
  const params = useParams();

  const [genresGames, setGenresGames] = useState(null)
  const [currentPage, setCurrentPage] = useState(1); //página actual de juegos
  const [totalGames, setTotalGames] = useState(0); //aquí medimos todos los juegos para hacer la media de las páginas, cada página da 20 juegos.

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/games?genres=${params.id}&key=${import.meta.env.VITE_API_KEY}&page=${currentPage}`)
      .then((response) => {
        setGenresGames(response.data.results);
        setTotalGames(response.data.count); //contamos la cantidad de juegos
        
      })
      .catch((error) => {
        console.log(error);
        Navigate("/error")
      });
  }, []);

  if (genresGames === null) {
    return <PacmanLoader 
    className="pacman"
    color={"yellow"} 
    size={50} 
    />;
  }

  return (
    <div className="custom-container">
      {genresGames.map((eachGame, i) => {
        let ratingColorClass = ""
        if(eachGame.rating >=0 && eachGame.rating <=2){
          ratingColorClass = "rating bronze"
        }else if (eachGame.rating > 2 && eachGame.rating <= 4){
          ratingColorClass = "rating silver"
        }else if (eachGame.rating > 4 && eachGame.rating <= 5){
          ratingColorClass = "rating gold"
        }
        return (
          <div key={i}>
            <Link to={"/game/" + eachGame.id}
            className="card">
              <div className="game-card">
                <img
                  src={eachGame.background_image}
                  alt={"gamename" + eachGame.name}
                />
                <h3>{eachGame.name}</h3>
                
                <p className={ratingColorClass}>{eachGame.rating}</p>
              </div>
            </Link>
          </div>
        );
      })}
      <div className="pagination"> {/* paginación, con botones*/}
        <Button
          variant="outline-primary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)} 
          >
          {/* se desactiva si currentPage es 1. página actual -1 para back*/}
          Back
        </Button>
        <span>Page {currentPage}</span>
        <Button
          variant="outline-primary"
          disabled={currentPage * 20 >= totalGames}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {/* se desactiva si currentPage es la última. página actual() +1 para next*/}
          Next
        </Button>
      </div>
    </div>
  );
}

export default GenresGames;
