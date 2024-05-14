import React, { useState } from "react";

function FormReview() {

  const [nameValue, setNameValue]=useState("")
  const [commentValue, setCommentValue]=useState("")
  const [topping, setTopping]=useState("")


  const handleNameChange=(e)=>{
   // console.log("escribiendo", e.target.value);
    setNameValue(e.target.value.toUpperCase().replace("BULBASAUR", "CHARMANDER MANUEL"))
  }
  const handleCommentChange=(e)=>{

    setCommentValue (e.target.value.toUpperCase())
  }
  const handleTopping=(e)=>{
   // console.log("point");
    setTopping(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("entregando");

    const newComment={

      name: nameValue,
      comment: commentValue,
      ratings:topping,

    }
    console.log("newComment");

  }
  return (
    <div>
      FormReview
      <h2>Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={nameValue} onChange={handleNameChange}/>
        </div>

        <div>
          <label>Comments:</label>
          <textarea type="text" name="comments" value={commentValue} onChange={handleCommentChange} />
        </div>

        <div>
           
          <label>Potatoes Rating:</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">1</label>
          <br/>
          
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">2</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">3</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">4</label>
          <br/>
          <input type="radio" name="1"onChange={handleTopping}></input>
          <label htmlFor="1">5</label>
          <br/>

        </div>

        <button>Are you sure?</button>
      </form>
    </div>
  );
}

export default FormReview;
