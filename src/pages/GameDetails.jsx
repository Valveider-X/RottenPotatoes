import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { Link } from "react-router-dom";
import CardForm from "../components/CardForm";
import FormReview from "../components/FormReview";
import FormCompletion from "../components/FormCompletion";
import EditReview from "../components/EditReview";

function GameDetails() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [completions, setCompletions] = useState([]);

  useEffect(() => {
    getData();

    getReviews();

    getCompletions();
  }, [params.id]);

  const reviewId = () => {
    console.log(reviews);
  };
  reviewId();
  const getReviews = () => {
    axios
      .get(`${import.meta.env.VITE_API_BACKEND}/reviews?gameId=${params.id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {});
  };
  const deleteCompletion = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${import.meta.env.VITE_API_BACKEND}/completions/${
        completions.index
      }
`);
    } catch (error) {}
  };

  const getCompletions = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_BACKEND}/completions?gameId=${params.id}`
      )
      .then((response) => {
        setCompletions(response.data);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (game === null) {
    return <PacmanLoader class="pacman" color={"yellow"} size={50} />;
  }
  return (
    <div>
      <p>GameDetails</p>

      <div className="game-card">
        <img
          src={game.background_image}
          style={{ height: "100px" }}
          alt={game.name}
        />
        <h3>{game.name}</h3>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: game.description }} />;
        <hr />
        <h4>{game.released}</h4>
        <h4>{game.rating}</h4>
      </div>
      <Link to={"/game-reviews/" + game.id}> REVIEWS</Link>
      <Link to={"/game-completion/" + game.id}>COMPLETION</Link>

      {reviews.map((eachReview, i) => {
        return (
          <div key={i}>
            <p>
              <b>Autor:</b>
            </p>
            <p>{eachReview.name}</p>

            <p>
              <b>Comments: </b>
            </p>
            <p>{eachReview.comment}</p>

            <p>
              <b>Rating Potatoes:</b>
            </p>
            <p>{eachReview.ratings}</p>

            <Link to={`/edit-review/${eachReview.id}`}>
              <button>Edit Comment</button>
            </Link>
            {/*  <Link to={`/game/${params.id}`}>
              <button onClick={()=> handleDelete(eachReview.id)}>Delete</button>
            </Link>*/}
          </div>
        );
      })}

      {completions.map((eachCompletion, i) => {
        return (
          <div key={i}>
            <p>
              <b>Completion</b>
            </p>
            <p>{eachCompletion.completionTime}</p>

            <button onClick={deleteCompletion}>Delete</button>
          </div>
        );
      })}

      <CardForm />

      <FormReview getReviews={getReviews} />
      <FormCompletion />
    </div>
  );
}

export default GameDetails;
