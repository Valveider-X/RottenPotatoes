import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ReviewList() {
  const [reviewListValue, setReviewListValue] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BACKEND}/reviews`)
      .then((response) => {
        setReviewListValue(response.data);
      })
      .catch((error) => {
        Navigate("/error");
      });
  }, []);

  return (
    <div className="review-list">
      {reviewListValue.map((eachReview, i) => {
        return (
          <div key={i}>
            <Link to={"/game-reviews"} className="card">
              <div className="review-card">
                <h3>{eachReview.name}</h3>
                <p>{eachReview.comments}</p>
                <p>{eachReview.rating}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewList;
