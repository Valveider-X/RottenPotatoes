import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import EditReview from "./EditReview";

function FormReview(props) {
  const params = useParams();
  const [nameValue, setNameValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [topping, setTopping] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    // console.log("escribiendo", e.target.value);
    setNameValue(e.target.value.toUpperCase());
  };
  const handleCommentChange = (e) => {
    setCommentValue(e.target.value.toUpperCase());
  };
  const handleTopping = (e) => {
    // console.log("point");
    setTopping(e.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entregando");
    //navigate(`/game/${params.id}`)

    const newComment = {
      gameId: params.id,
      name: nameValue,
      comment: commentValue,
      ratings: topping,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BACKEND}/reviews`,
        newComment
      );
      console.log("tarea creada");
      props.getReviews();
    } catch (error) {
      //console.log(error);
    }
    //console.log(newComment);
  };
  return (
    <div>
      FormReview
      <h2>Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label value={params.id}></label>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={nameValue}
            
            onChange={handleNameChange}
          />
        </div>

        <div>
          <label>Comments:</label>
          <textarea
            type="text"
            name="comments"
            value={commentValue}
            onChange={handleCommentChange}
          />
        </div>

        <div className="card-form">
          <label>Potatoes Rating:</label>
          <br />
          <input type="radio" name="1" value={1} onChange={handleTopping}></input>
          <label htmlFor="1">1</label>
          <br />

          <input type="radio" name="1" value={2} onChange={handleTopping}></input>
          <label htmlFor="2">2</label>
          <br />
          <input type="radio" name="1" value={3} onChange={handleTopping}></input>
          <label htmlFor="3">3</label>
          <br />
          <input type="radio" name="1" value={4} onChange={handleTopping}></input>
          <label htmlFor="4">4</label>
          <br />
          <input type="radio" name="1" value={5} onChange={handleTopping}></input>
          <label htmlFor="5">5</label>
        </div>

        <button className="botoncito">Are you sure?</button>
      </form>
    </div>
  );
}

export default FormReview;
