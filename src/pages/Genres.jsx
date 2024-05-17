import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

//genres

function Genres() {
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/genres?key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setGenres(response.data.results);
      })
      .catch((error) => {
        Navigate("/error");
      });
  }, []);

  if (genres === null) {
    return <PacmanLoader class="pacman" color={"yellow"} size={50} />;
  }

  return (
    <div>
      Genres
      {genres.map((eachGenre, i) => {
        return (
          <div key={i}>
            <Link to={"/genres/" + eachGenre.id}>
              <div className={"genres-card"}>
                <img
                  src={eachGenre.image_background}
                  style={{ height: "200px" }}
                />
                <h3>{eachGenre.name}</h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
