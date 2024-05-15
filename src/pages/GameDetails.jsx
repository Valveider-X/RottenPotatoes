import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { Link } from "react-router-dom";
import CardForm from "../components/CardForm";
import FormReview from "../components/FormReview";

function GameDetails() {
  const params = useParams();
  const commentId = useParams()
  console.log(params);
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    getData();

    getReviews();

    getBackendId()
  }, []);



  const getReviews = () => {
    axios
      .get(`${import.meta.env.VITE_API_BACKEND}/reviews?gameId=${params.id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {});
  };

  const getBackendId = () => {
    axios
      .get(`${import.meta.env.VITE_API_BACKEND}/reviews`)
      
      .then((response) => {
        console.log(response)
        commentId(response.data.id)
      })
      .catch((error) => {});
  };

  const getData = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/games/${params.id}?key=${
          import.meta.env.VITE_API_KEY
        }`
      )

      .then((response) => {
        console.log(response);
        setGame(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (game === null) {
    return <PacmanLoader color={"yellow"} size={50} />;
  }
console.log(commentId)
  return (
    <div>
      <p>GameDetails</p>

      <div className="game-card">
        <img
          src={game.background_image}
          style={{ height: "100px" }}
          alt={"pito"}
        />
        <h3>{game.name}</h3>
        <hr />
        <p>{game.description}</p>
        <hr />
        <h4>{game.released}</h4>
        <h4>{game.rating}</h4>
      </div>
      <Link to={"/game-reviews/" + game.id}> REVIEWS</Link>
      <Link to={"/game-completion/" + game.id}>COMPLETION</Link>

      {reviews.map((eachReview, i)=>{

        return (
          <div key={i}>

       
            <p><b>Autor:</b></p>
          <p>{eachReview.name}</p>

            <p><b>Comments: </b></p>
          <p>{eachReview.comment}</p>

            <p><b>Rating Potatoes:</b></p>
          <p>{eachReview.ratings}</p>

          <Link to={`/edit-review/${params.id}/`}>
          <button>Edit Comment</button>
          </Link>
            <Link to={`/game/${params.id}`}>
              <button>Delete</button>
            </Link>
             </div>
        )

      })}


      <CardForm />
      <FormReview getReviews={getReviews}/>

    </div>
  );
}

export default GameDetails;
