import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import EditReview from "./EditReview";
import Bravas5 from "../assets/images/bravas5.png";
import Bravas4 from "../assets/images/fritas4.png";
import Bravas3 from "../assets/images/chips3.png";
import Bravas2 from "../assets/images/cocidas2.png";
import Bravas1 from "../assets/images/crudas1.png";

function FormReview(props) {
  const params = useParams();
  const [nameValue, setNameValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [topping, setTopping] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {

    setNameValue(e.target.value.toUpperCase());
  };
  const handleCommentChange = (e) => {
    setCommentValue(e.target.value.toUpperCase());
  };
  const handleTopping = (e) => {
   
    setTopping(e.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
      
      props.getReviews();
    } catch (error) {
      navigate("/error")
      
    }
   
  };
  return (
    <div className="form-reviews">
      <h2>Add Review</h2>
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
          <div className="bravas-rating"></div>
          <input type="radio" name="1" value={1} onChange={handleTopping}></input>
          <label htmlFor="1">1<img src={Bravas1} alt="patata cruda" style={{ width: "30px" }}/></label>
          <br />

          <input type="radio" name="1" value={2} onChange={handleTopping}></input>
          <label htmlFor="2">2<img src={Bravas2} alt="patata cocida" style={{ width: "30px" }}/></label>
          <br />
          <input type="radio" name="1" value={3} onChange={handleTopping}></input>
          <label htmlFor="3">3<img src={Bravas3} alt="patatas chips" style={{ width: "30px" }}/></label>
          <br />
          <input type="radio" name="1" value={4} onChange={handleTopping}></input>
          <label htmlFor="4">4<img src={Bravas4} alt="patatas fritas" style={{ width: "30px" }}/></label>
          <br />
          <input type="radio" name="1" value={5} onChange={handleTopping}></input>
          <label htmlFor="5">5<img src={Bravas5} alt="patatas bravas" style={{ width: "30px" }}/></label>
        </div>

        <button className="botoncito">Are you sure?</button>
      </form>
    </div>
  );
}

export default FormReview;
