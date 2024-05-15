import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GameDetails from "./GameDetails";
import { PacmanLoader } from "react-spinners";
//bootstrap
import Button from "react-bootstrap/Button";
import CardForm from "../components/CardForm";

function GamesList() {
  const [gamesList, setGamesList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); //página actual de juegos
  const [totalGames, setTotalGames] = useState(0); //aquí medimos todos los juegos para hacer la media de las páginas, cada página da 20 juegos.

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${currentPage}` //metemos page y currentPage de forma extra ya que la api nos deja.
      )
      .then((response) => {
        //console.log(response)
        setGamesList(response.data.results);
        setTotalGames(response.data.count); //contamos la cantidad de juegos
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  if (gamesList === null) {
    return <PacmanLoader color={"yellow"} size={50} />
  }

  return (
    <div>
      GamesList
      {gamesList.map((game, i) => {
        const gameId=game.id
        return (
          <div key={i}>
            <Link to={"/game/" + game.id}>
              <div className="game-card">
                <img
                  src={game.background_image}
                  style={{ height: "100px" }}
                  alt={"gameName" + game.name}
                />
                <h3>{game.name}</h3>
                <h4>{game.released}</h4>
                <h4>{game.rating}</h4>
              </div>
              <CardForm gameId={gameId}/>
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

export default GamesList;
