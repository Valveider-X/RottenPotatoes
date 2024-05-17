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
 
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [completions, setCompletions] = useState([]);

  useEffect(() => {
    getData();

    getReviews();

    getCompletions();
  }, [params.id]);

  const reviewId = () => {
    
  };
  reviewId();
  const getReviews = () => {
    axios
      .get(`${import.meta.env.VITE_API_BACKEND}/reviews?gameId=${params.id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  const deleteCompletion = async (id) => {
  
    try {
      await axios.delete(`${import.meta.env.VITE_API_BACKEND}/completions/${
        id
      }
`);
  navigate(0)
    } catch (error) {
      navigate("/error")
    }
  };

  const getCompletions = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_BACKEND}/completions?gameId=${params.id}`
      )
      .then((response) => {
        setCompletions(response.data);
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  const getData = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/games/${params.id}?key=${
          import.meta.env.VITE_API_KEY
        }`
      )

      .then((response) => {
        
        setGame(response.data);
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  if (game === null) {
    return <PacmanLoader className="pacman" color={"yellow"} size={50} />;
  }
  return (
    <div>
      
      <p>GameDetails</p>

      <div className="game-card">
        <img className="game-details-img"
          src={game.background_image}
          alt={game.name}
        />
        <div className="game-description">
        <h3>{game.name}</h3>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: game.description }} />;
        <hr />
        <h4>Released in: {game.released}</h4>
        <h4>Rating: {game.rating}/5</h4>
        </div>
      </div>
      {/*<Link to={"/game-reviews/" + game.id}> REVIEWS</Link>
      <Link to={"/game-completion/" + game.id}>COMPLETION</Link>*/}

      {reviews.map((eachReview, i) => {
        return (
          <div key={i} className="reviews">
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
              <button className="botoncito">Edit Comment</button>
            </Link>
            {/*  <Link to={`/game/${params.id}`}>
              <button onClick={()=> handleDelete(eachReview.id)}>Delete</button>
            </Link>*/}
          </div>
        );
      })}

      {completions.map((eachCompletion, i) => {
        return (
          <div key={i} className="card-completions">
            <p> 
              <b>Completion</b>
            </p>
            <p>{eachCompletion.completionTime}</p>

            <button className="botoncito" onClick={()=>{deleteCompletion(eachCompletion.id)}}>Delete</button>
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
