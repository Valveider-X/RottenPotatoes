import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function GenresGames() {
  const params = useParams();

  const [genresGames, setGenresGames] = useState(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/games?genres=${params.id}&key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setGenresGames(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (genresGames === null) {
    return <PacmanLoader 
    color={"yellow"} 
    size={50} 
    />;
  }

  return (
    <div>
      {genresGames.map((eachGame, i) => {
        return (
          <div key={i}>
            <Link to={"/game/" + eachGame.id}>
              <div className="game-card">
                <img
                  src={eachGame.background_image}
                  style={{ height: "100px" }}
                  alt={"gamename" + eachGame.name}
                />
                <h3>{eachGame.name}</h3>
                <h4>{eachGame.released}</h4>
                <h4>{eachGame.rating}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default GenresGames;
