import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormCompletion from "../components/FormCompletion";
import axios from "axios";
import { Navigate } from "react-router-dom";

function GameCompletion() {
  const params = useParams();

  const [completion, setCompletion] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_BACKEND}/completions`)

      .then((response) => {
        setCompletion(response.data);
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="review-list">
      {completion.map((eachCompletion, i) => {
        return (
          <div key={i} className="card">
            <div className="review-card">
              <h3>{eachCompletion.completionTime}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GameCompletion;
